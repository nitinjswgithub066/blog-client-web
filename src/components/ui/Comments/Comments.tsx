"use client";

import { useState } from "react";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import Button from "@/components/ui/Button";
import styles from "./Comments.module.css";

// Mock Comment Type
interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  replies?: Comment[];
}

// Initial Mock Data
const initialComments: Comment[] = [
  {
    id: "c1",
    author: "Sarah Jenkins",
    text: "This completely changed how I think about the topic. The distinction between the hype and the actual utility is spot on. Do you think this will apply similarly to smaller teams?",
    date: "2 hours ago",
    replies: [
      {
        id: "c1-1",
        author: "Vexira",
        text: "Absolutely. In fact, smaller teams might see the benefits even faster since they have less structural overhead to adapt their workflows.",
        date: "1 hour ago",
      },
    ],
  },
  {
    id: "c2",
    author: "Marcus T.",
    text: "Great read! I've been struggling to explain this to my stakeholders, going to share this article with them tomorrow.",
    date: "5 hours ago",
  },
];

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Total comments including replies
  const totalComments = comments.reduce(
    (acc, comment) => acc + 1 + (comment.replies?.length || 0),
    0,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      const newComment: Comment = {
        id: `c${Date.now()}`,
        author: name,
        text,
        date: "Just now",
      };

      setComments([newComment, ...comments]);
      setText("");
      setIsSubmitting(false);
    }, 600);
  };

  const CommentNode = ({ comment }: { comment: Comment }) => (
    <div className={styles.commentItem}>
      <div className={styles.commentAvatar}>
        {comment.author.charAt(0).toUpperCase()}
      </div>
      <div className={styles.commentContent}>
        <div className={styles.commentMeta}>
          <span className={styles.commentAuthor}>{comment.author}</span>
          <span className={styles.commentDate}>{comment.date}</span>
        </div>
        <p className={styles.commentText}>{comment.text}</p>
        <div className={styles.commentActions}>
          <button className={styles.actionBtn}>
            <FiMessageSquare /> Reply
          </button>
        </div>

        {/* Render nested replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className={styles.replies}>
            {comment.replies.map((reply) => (
              <CommentNode key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section
      className={styles.commentsWrapper}
      aria-labelledby="comments-heading"
    >
      <div className={styles.commentsHeader}>
        <h3 id="comments-heading" className={styles.commentsTitle}>
          Comments
        </h3>
        <span className={styles.commentsCount}>{totalComments}</span>
      </div>

      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <div className={styles.avatarPlaceholder}>
            <FiUser />
          </div>
          <input
            type="text"
            placeholder="Your name"
            className={styles.nameInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <textarea
          placeholder="What are your thoughts?"
          className={styles.commentInput}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className={styles.formFooter}>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || !name || !text}
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
          </Button>
        </div>
      </form>

      <div className={styles.commentsList}>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentNode key={comment.id} comment={comment} />
          ))
        ) : (
          <p
            style={{
              color: "var(--text-muted)",
              textAlign: "center",
              padding: "2rem 0",
            }}
          >
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </section>
  );
}
