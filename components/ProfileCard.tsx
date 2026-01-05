import React, { useRef, useState } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((x - centerX) / centerX) * 12;
    const rotateY = ((y - centerY) / centerY) * -12;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="pc-card-wrapper">
      <div 
        className="pc-card-shell"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          '--rotate-x': `${rotate.x}deg`,
          '--rotate-y': `${rotate.y}deg`
        } as React.CSSProperties}
      >
        <div ref={cardRef} className="pc-card">
          <img src={avatarUrl} alt="Cristian Gutiérrez - BuildersOps" className="pc-main-image" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;