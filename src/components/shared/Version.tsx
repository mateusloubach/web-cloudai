import React from 'react';

const Version: React.FC = () => {
    return (
        <div className="flex lg:justify-left" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center px-3 py-1 border border-white/50 rounded-full bg-white/5 backdrop-blur-lg gap-1">
                <div className="w-2 h-2 rounded-full bg-background" />
                <a href='/' className='bg-[linear-gradient(to_right,_#8b5cf6,_#06b6d4,_#8b5cf6,_#06b6d4)] bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent'>
                    <div className="flex items-center underline">
                        {/* <h6>v0.3 is live!</h6> */}
                        <h6>v0.1</h6>
                    </div>
                </a>
                {/* <span className="hidden md:inline ml-2 font-mono sm:text-sm text-zinc-700 tracking-wider">Start your Journey here!</span> */}
                {/* <span className=" hidden md:inline ml-2 font-italic font-montserrat sm:text-sm text-zinc-700 tracking-wider">Our conviction is in the Code</span> */}
                <span className=" hidden md:inline ml-2 font-monosm:text-sm text-zinc-700 tracking-wider">is live!</span>
            </div>
        </div>
    );
};

export default Version;