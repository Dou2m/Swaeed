
import React from 'react';
import Collapsible from './Collapsible';
import { TeamMemberType } from '../types';

interface TeamMemberProps {
  member: TeamMemberType;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 transition-transform duration-300 text-white/70 ${isOpen ? 'rotate-180' : ''}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);


const TeamMember: React.FC<TeamMemberProps> = ({ member, isOpen, onToggle }) => {
  const buttonId = `${member.id}-button`;
  const contentId = member.id;

  return (
    <article className="rounded-2xl liquid overflow-hidden">
      <button
        id={buttonId}
        className="btn focus-ring p-5 w-full text-right flex justify-between items-center hover:bg-white/5 transition-colors"
        onClick={() => onToggle(member.id)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div className="text-lg font-semibold">{member.name} — {member.title}</div>
        <ChevronDownIcon isOpen={isOpen} />
      </button>
      <Collapsible isOpen={isOpen} id={contentId} aria-labelledby={buttonId}>
        <div className="px-5 pb-5 text-right leading-8">
          <div className="border-t border-white/10 pt-5">
            {member.message}
          </div>
        </div>
      </Collapsible>
    </article>
  );
};

export default React.memo(TeamMember);