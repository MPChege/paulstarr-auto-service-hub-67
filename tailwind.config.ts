
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated colors for blue, yellow, and white theme
				paulstarr: {
					'50': '#EBF8FF',
					'100': '#D1EEFC',
					'200': '#A7D8F0',
					'300': '#7CC1E4',
					'400': '#55AED7',
					'500': '#3498DB',
					'600': '#2A7AB0',
					'700': '#1F5A83',
					'800': '#173B56',
					'900': '#0C1D2A',
					'accent': '#2563EB',
				},
				blue: {
					'50': '#EFF6FF', 
					'100': '#DBEAFE', 
					'200': '#BFDBFE', 
					'300': '#93C5FD', 
					'400': '#60A5FA', 
					'500': '#3B82F6', 
					'600': '#2563EB', 
					'700': '#1D4ED8', 
					'800': '#1E40AF', 
					'900': '#1E3A8A'
				},
				yellow: {
					'50': '#FEFCE8',
					'100': '#FEF9C3',
					'200': '#FEF08A',
					'300': '#FDE047',
					'400': '#FACC15',
					'500': '#EAB308',
					'600': '#CA8A04',
					'700': '#A16207',
					'800': '#854D0E',
					'900': '#713F12'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'slide-in-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out'
			},
			fontFamily: {
				sans: ['Inter', 'SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
			},
			boxShadow: {
				'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
				'card': '0 4px 28px rgba(0, 0, 0, 0.05)',
				'button': '0 2px 8px rgba(0, 0, 0, 0.08)',
				'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			transitionDuration: {
				'400': '400ms',
				'2000': '2000ms',
				'3000': '3000ms',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'url("/hero-background.jpg")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
