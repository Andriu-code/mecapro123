import { useState } from "react";
import "./AboutUs.scss";

interface ReviewCardProps {
    text: string;
    author: string;
    position: string;
}

export const ReviewCard = ({
    text,
    author,
    position,
}: ReviewCardProps) => {
    const [expanded, setExpanded] = useState(false);

    const limit = 120;

    const shouldShowButton = text.length > limit;

    return (
        <div className="review-card">
            <span className="quote">❝</span>

            <p>
                {expanded
                    ? text
                    : `${text.slice(0, limit)}${text.length > limit ? "..." : ""
                    }`}
            </p>

            {shouldShowButton && (
                <button
                    className="read-more"
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Ver menos" : "Ver más"}
                </button>
            )}

            <h4>{author}</h4>
            <span>{position}</span>
        </div>
    );
};