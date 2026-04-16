"use client";
import React, {useState, useRef} from "react";
import {motion, useMotionValue, AnimatePresence} from "framer-motion";
import Link from "next/link";

interface iNavItem {
	heading: string;
	href: string;
	subheading?: string;
	imgSrc?: string;
}

interface iNavLinkProps extends iNavItem {
	setIsActive: (isActive: boolean) => void;
	index: number;
}

interface iCurvedNavbarProps {
	setIsActive: (isActive: boolean) => void;
	navItems: iNavItem[];
}

interface iHeaderProps {
	navItems?: iNavItem[];
	footer?: React.ReactNode;
}

// Stable SVG Icon Components to avoid lucide-react brand icon issues
const IconLinkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const IconTwitter = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const IconInstagram = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const IconGithub = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const MENU_SLIDE_ANIMATION: any = {
	initial: {x: "calc(100% + 100px)"},
	enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
	exit: {
		x: "calc(100% + 100px)",
		transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
	},
};

const defaultNavItems: iNavItem[] = [
	{
		heading: "Home",
		href: "/",
		subheading: "Return to sanctuary",
	},
	{
		heading: "About",
		href: "/about",
		subheading: "Our culinary ethos",
	},
	{
		heading: "Products",
		href: "/catalog",
		subheading: "The IQF collection",
	},
	{
		heading: "Quality",
		href: "/quality",
		subheading: "Standards & Science",
	},
    {
		heading: "Export",
		href: "/logistics",
		subheading: "Global Hubs",
	},
	{
		heading: "Contact",
		href: "/contact",
		subheading: "Get in touch",
	},
];

const CustomFooter: React.FC = () => {
	return (
		<div className="flex w-full text-sm justify-between text-primary px-10 md:px-24 py-10 opacity-60">
			<a href="#" className="hover:text-secondary hover:scale-110 transition-all">
				<IconLinkedin size={20} />
			</a>
			<a href="#" className="hover:text-secondary hover:scale-110 transition-all">
				<IconInstagram size={20} />
			</a>
			<a href="#" className="hover:text-secondary hover:scale-110 transition-all">
				<IconTwitter size={20} />
			</a>
			<a href="#" className="hover:text-secondary hover:scale-110 transition-all">
				<IconGithub size={20} />
			</a>
            <p className="hidden md:block font-black text-[10px] uppercase tracking-widest text-primary/40">AMR FROIZZ © 2026</p>
		</div>
	);
};

const NavLink: React.FC<iNavLinkProps> = ({
	heading,
	href,
	setIsActive,
	index,
}) => {
	const ref = useRef<HTMLAnchorElement | null>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const handleMouseMove = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		const rect = ref.current!.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX / rect.width - 0.5);
		y.set(mouseY / rect.height - 0.5);
	};

	const handleClick = () => {
		return setIsActive(false);
	};

	return (
		<motion.div
			onClick={handleClick}
			initial="initial"
			whileHover="whileHover"
			className="group relative flex items-center justify-between border-b border-primary/10 py-4 transition-colors duration-500 md:py-6 uppercase"
		>
			<Link ref={ref} onMouseMove={handleMouseMove} href={href} className="w-full">
				<div className="relative flex items-center justify-between">
                    <div className="flex items-center">
					<span className="text-primary/20 transition-colors duration-500 text-sm font-black mr-4">
						0{index}
					</span>
					<div className="flex flex-row gap-2">
						<motion.span
							variants={{
								initial: {x: 0},
								whileHover: {x: -16},
							}}
							transition={{
								type: "spring",
								staggerChildren: 0.075,
								delayChildren: 0.25,
							}}
							className="relative z-10 block text-4xl font-black text-primary transition-colors duration-500 md:text-5xl tracking-tighter"
						>
							{heading.split("").map((letter, i) => {
								return (
									<motion.span
										key={i}
										variants={{
											initial: {x: 0},
											whileHover: {x: 16},
										}}
										transition={{type: "spring"}}
										className="inline-block"
									>
										{letter}
									</motion.span>
								);
							})}
						</motion.span>
					</div>
                    </div>
                    <motion.div 
                        variants={{ initial: {opacity: 0, x: -20}, whileHover: {opacity: 1, x: 0} }}
                        className="hidden md:block text-secondary italic font-serif text-lg text-right"
                    >
                        Explore →
                    </motion.div>
				</div>
			</Link>
		</motion.div>
	);
};

const Curve: React.FC = () => {
	const [dimension, setDimension] = useState({width: 0, height: 0});

    React.useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }, []);

	const initialPath = `M100 0 L200 0 L200 ${dimension.height} L100 ${dimension.height} Q-100 ${dimension.height / 2} 100 0`;
	const targetPath = `M100 0 L200 0 L200 ${dimension.height} L100 ${dimension.height} Q100 ${dimension.height / 2} 100 0`;

	const curve: any = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: {duration: 1, ease: [0.76, 0, 0.24, 1]},
		},
		exit: {
			d: initialPath,
			transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
		},
	};

	return (
		<svg
			className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full"
			style={{fill: "var(--background)"}} 
		>
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
};

const CurvedNavbar: React.FC<
	iCurvedNavbarProps & {footer?: React.ReactNode}
> = ({setIsActive, navItems, footer}) => {
	return (
		<motion.div
			variants={MENU_SLIDE_ANIMATION}
			initial="initial"
			animate="enter"
			exit="exit"
			className="h-[100dvh] w-screen max-w-screen-sm fixed right-0 top-0 z-[101] bg-background shadow-2xl"
		>
			<div className="h-full pt-20 flex flex-col justify-between">
				<div className="flex flex-col text-5xl gap-3 mt-0 px-10 md:px-24">
					<div className="text-primary/40 border-b border-primary/10 uppercase text-xs font-black tracking-widest mb-4 pb-2">
						<p>Navigation Menu</p>
					</div>
					<section className="bg-transparent mt-0">
						<div className="mx-auto max-w-7xl">
							{navItems.map((item, index) => {
								return (
									<NavLink
										key={item.href}
										{...item}
										setIsActive={setIsActive}
										index={index + 1}
									/>
								);
							})}
						</div>
					</section>
				</div>
				{footer}
			</div>
			<Curve />
		</motion.div>
	);
};

const Header: React.FC<iHeaderProps> = ({
	navItems = defaultNavItems,
	footer = <CustomFooter />,
}) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<>
			<div className="relative z-[110] flex items-center">
				<div
					onClick={handleClick}
					className="w-12 h-12 rounded-[1.25rem] flex md:hidden items-center justify-center cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 text-[#38382f] shadow-sm hover:bg-white/20 active:scale-90 transition-all"
				>
					<div className="relative w-5 h-5 flex flex-col justify-center items-center gap-1.5">
						<motion.span
							animate={{ 
                rotate: isActive ? 45 : 0, 
                y: isActive ? 4.5 : 0,
                width: isActive ? "20px" : "18px" 
              }}
							className="block h-[1.5px] bg-[#38382f] origin-center"
						></motion.span>
						<motion.span
							animate={{ 
                opacity: isActive ? 0 : 1,
                x: isActive ? 5 : 0 
              }}
							className="block h-[1.5px] w-5 bg-[#38382f]"
						></motion.span>
						<motion.span
							animate={{ 
                rotate: isActive ? -45 : 0, 
                y: isActive ? -4.5 : 0,
                width: isActive ? "20px" : "18px" 
              }}
							className="block h-[1.5px] bg-[#38382f] origin-center"
						></motion.span>
					</div>
				</div>
			</div>

			<AnimatePresence mode="wait">
				{isActive && (
					<div className="fixed inset-0 z-[105]">
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setIsActive(false)}
                            className="absolute inset-0 bg-primary/20 backdrop-blur-md"
                        />
                        <CurvedNavbar
                            setIsActive={setIsActive}
                            navItems={navItems}
                            footer={footer}
                        />
                    </div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
