import React, { useState, useCallback } from 'react';
import { teamMembers, trainerMessage, teamGeneralMessage, leadersMessage } from './constants';
import TeamMember from './components/TeamMember';
import Collapsible from './components/Collapsible';

const Header = () => (
    <header className="liquid rounded-2xl p-6 mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">كيان سواعد شباب مصر</h1>
        <p className="mt-2 text-lg sm:text-xl font-semibold text-white/95">البرنامج القومي لإعداد قادة الغد</p>
    </header>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.25a4.25 4.25 0 1 1 0 8.5a4.25 4.25 0 0 1 0-8.5zm0 2a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5zM17 6.25a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
    </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 transition-transform duration-300 text-white/70 ${isOpen ? 'rotate-180' : ''}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const Footer = () => (
    <footer className="text-center text-sm mt-16 pb-6">
        <div className="text-white/90 font-medium mb-2">Made with ❤ by Mohamed Ramadan</div>
        <a href="https://instagram.com/hvmooo" target="_blank" rel="noopener noreferrer" aria-label="Contact the developer on Instagram" className="inline-flex justify-center items-center gap-2 text-white/70 hover:text-white transition focus-ring rounded-md p-1">
            <InstagramIcon />
            <span>Contact with developer</span>
        </a>
        <div className="mt-2 text-white/60">Sawaed Shabab Masr — 2025</div>
    </footer>
);

const App: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const handleToggle = useCallback((id: string) => {
        setOpenId(prevId => (prevId === id ? null : id));
    }, []);
    
    const trainerButtonId = `${trainerMessage.id}-button`;
    const teamGeneralButtonId = `${teamGeneralMessage.id}-button`;
    const leadersButtonId = `${leadersMessage.id}-button`;

    return (
        <main className="container">
            <Header />

            <section className="mb-8 grid gap-4 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-2">رسائل خاصة</h2>
                <article className="liquid rounded-2xl overflow-hidden">
                    <button
                        id={trainerButtonId}
                        onClick={() => handleToggle(trainerMessage.id)}
                        aria-expanded={openId === trainerMessage.id}
                        aria-controls={trainerMessage.id}
                        className="btn focus-ring p-5 w-full text-right text-lg font-semibold flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                        <span>رسالة شكر لدكتور محمد صلاح</span>
                        <ChevronDownIcon isOpen={openId === trainerMessage.id} />
                    </button>
                    <Collapsible 
                        isOpen={openId === trainerMessage.id} 
                        id={trainerMessage.id}
                        aria-labelledby={trainerButtonId}
                    >
                        <div className='px-5 pb-5 text-right leading-8'>
                            <div className="border-t border-white/10 pt-5">
                                <h3 className="text-2xl font-bold mb-3">{trainerMessage.title}</h3>
                                {trainerMessage.content}
                            </div>
                        </div>
                    </Collapsible>
                </article>

                <article className="liquid rounded-2xl overflow-hidden">
                    <button
                        id={teamGeneralButtonId}
                        onClick={() => handleToggle(teamGeneralMessage.id)}
                        aria-expanded={openId === teamGeneralMessage.id}
                        aria-controls={teamGeneralMessage.id}
                        className="btn focus-ring p-5 w-full text-right text-lg font-semibold flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                        <span>رسالة شكر من محمد والشباب للكيان</span>
                        <ChevronDownIcon isOpen={openId === teamGeneralMessage.id} />
                    </button>
                    <Collapsible 
                        isOpen={openId === teamGeneralMessage.id} 
                        id={teamGeneralMessage.id}
                        aria-labelledby={teamGeneralButtonId}
                    >
                        <div className='px-5 pb-5 text-right leading-8'>
                            <div className="border-t border-white/10 pt-5">
                                <h3 className="text-2xl font-bold mb-3">{teamGeneralMessage.title}</h3>
                                {teamGeneralMessage.content}
                            </div>
                        </div>
                    </Collapsible>
                </article>

                <article className="liquid rounded-2xl overflow-hidden">
                    <button
                        id={leadersButtonId}
                        onClick={() => handleToggle(leadersMessage.id)}
                        aria-expanded={openId === leadersMessage.id}
                        aria-controls={leadersMessage.id}
                        className="btn focus-ring p-5 w-full text-right text-lg font-semibold flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                        <span>رسالة شكر لأصدقائي القادة</span>
                        <ChevronDownIcon isOpen={openId === leadersMessage.id} />
                    </button>
                    <Collapsible 
                        isOpen={openId === leadersMessage.id} 
                        id={leadersMessage.id}
                        aria-labelledby={leadersButtonId}
                    >
                        <div className='px-5 pb-5 text-right leading-8'>
                            <div className="border-t border-white/10 pt-5">
                                <h3 className="text-2xl font-bold mb-3">{leadersMessage.title}</h3>
                                {leadersMessage.content}
                            </div>
                        </div>
                    </Collapsible>
                </article>
            </section>

            <section className="mb-10 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">فريق الكيان</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {teamMembers.map((member) => (
                        <TeamMember
                            key={member.id}
                            member={member}
                            isOpen={openId === member.id}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default App;
