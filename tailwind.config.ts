
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
				// FlowTune custom colors
				success: '#10B981',
				warning: '#FBBF24',
				danger: '#EF4444',
				info: '#3B82F6',
				'chart-1': 'hsl(var(--chart-1))',
				'chart-2': 'hsl(var(--chart-2))',
				'chart-3': 'hsl(var(--chart-3))',
				'chart-4': 'hsl(var(--chart-4))',
				'chart-5': 'hsl(var(--chart-5))'
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
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-in': 'slide-in 0.3s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			textShadow: {
				sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
				DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.05)',
				lg: '0 8px 16px rgba(0, 0, 0, 0.05)',
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(255, 255, 255, 0.1)',
				'glow': '0 0 15px rgba(255, 255, 255, 0.15)',
				'glow-lg': '0 0 25px rgba(255, 255, 255, 0.2)',
				'glow-blue': '0 0 15px rgba(59, 130, 246, 0.3)',
				'glow-green': '0 0 15px rgba(52, 211, 153, 0.3)',
				'glow-yellow': '0 0 15px rgba(251, 191, 36, 0.3)',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// Add text shadow plugin
		function ({ addUtilities, theme, e }) {
			const textShadows = theme('textShadow', {});
			const utilities = Object.entries(textShadows).map(([key, value]) => {
				return {
					[`.${e(`text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`)}`]: {
						textShadow: value,
					},
				};
			});
			addUtilities(utilities);
		},
	],
} satisfies Config;
