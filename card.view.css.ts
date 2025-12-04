namespace $.$$ {
	$mol_style_define($bog_card, {
		font: {
			family: 'system-ui, -apple-system, sans-serif',
		},
		backgroundColor: '#0a0a0f',
		minHeight: '100vh',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'auto',
		position: 'relative',
		padding: '1rem',
		margin: 0,

		// Animated background gradient
		Background: {
			position: 'fixed',
			inset: '0',
			opacity: 0.5,
			animationName: 'pulse',
			animationDuration: '8s',
			animationTimingFunction: 'ease-in-out',
			animationIterationCount: 'infinite',
		},

		// Grid overlay
		Grid_overlay: {
			position: 'fixed',
			inset: '0',
			opacity: 0.3,
		},

		// Particles
		Particles: {
			position: 'fixed',
			inset: '0',
			pointerEvents: 'none',
		},

		Particle1: {
			position: 'absolute',
			left: '10%',
			top: '20%',
			width: '4px',
			height: '4px',
			backgroundColor: '#6366f1',
			borderRadius: '50%',
			opacity: 0.4,
			animationName: 'float1',
			animationDuration: '15s',
			animationIterationCount: 'infinite',
		},

		Particle2: {
			position: 'absolute',
			left: '20%',
			top: '80%',
			width: '4px',
			height: '4px',
			backgroundColor: '#8b5cf6',
			borderRadius: '50%',
			opacity: 0.4,
			animationName: 'float2',
			animationDuration: '15s',
			animationIterationCount: 'infinite',
			animationDelay: '-2s',
		},

		Particle3: {
			position: 'absolute',
			left: '60%',
			top: '10%',
			width: '4px',
			height: '4px',
			backgroundColor: '#6366f1',
			borderRadius: '50%',
			opacity: 0.4,
			animationName: 'float3',
			animationDuration: '15s',
			animationIterationCount: 'infinite',
			animationDelay: '-4s',
		},

		Particle4: {
			position: 'absolute',
			left: '80%',
			top: '70%',
			width: '4px',
			height: '4px',
			backgroundColor: '#ec4899',
			borderRadius: '50%',
			opacity: 0.4,
			animationName: 'float4',
			animationDuration: '15s',
			animationIterationCount: 'infinite',
			animationDelay: '-6s',
		},

		Particle5: {
			position: 'absolute',
			left: '40%',
			top: '50%',
			width: '4px',
			height: '4px',
			backgroundColor: '#6366f1',
			borderRadius: '50%',
			opacity: 0.4,
			animationName: 'float5',
			animationDuration: '15s',
			animationIterationCount: 'infinite',
			animationDelay: '-8s',
		},

		Particle6: {
			position: 'absolute',
			left: '90%',
			top: '30%',
			width: '4px',
			height: '4px',
			backgroundColor: '#8b5cf6',
			borderRadius: '50%',
			opacity: 0.4,
			animationName: 'float6',
			animationDuration: '15s',
			animationIterationCount: 'infinite',
			animationDelay: '-10s',
		},

		// Main card
		Card: {
			flex: {
				direction: 'column',
			},
			position: 'relative',
			width: '100%',
			maxWidth: '520px',
			padding: '3rem',
			margin: 'auto',
			background: {
				image: [['linear-gradient(135deg, rgba(18, 18, 26, 0.9) 0%, rgba(18, 18, 26, 0.7) 100%)']],
			},
			backdropFilter: [[new $mol_style_func('blur', '20px')]],
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(99, 102, 241, 0.15)',
			borderRadius: '24px',
			animationName: 'cardEntry',
			animationDuration: '1s',
			animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
			boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.15)',
			zIndex: 10,
		},

		// Header
		Header: {
			flex: {
				direction: 'column',
			},
			textAlign: 'center',
			margin: {
				bottom: '2.5rem',
			},
		},

		Logo: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '80px',
			height: '80px',
			margin: {
				bottom: '1.5rem',
				left: 'auto',
				right: 'auto',
			},
			background: {
				image: [['linear-gradient(135deg, #6366f1, #8b5cf6)']],
			},
			borderRadius: '20px',
			boxShadow: '0 20px 40px -10px rgba(99, 102, 241, 0.4)',
			animationName: 'logoFloat',
			animationDuration: '4s',
			animationTimingFunction: 'ease-in-out',
			animationIterationCount: 'infinite',
		},

		Logo_text: {
			font: {
				family: 'monospace',
				size: '2rem',
				weight: 700,
			},
			color: 'white',
		},

		Title: {
			font: {
				size: '2rem',
				weight: 700,
			},
			color: '#f8fafc',
			margin: {
				bottom: '0.5rem',
			},
			letterSpacing: '-0.02em',
		},

		Subtitle: {
			font: {
				family: 'monospace',
				size: '0.85rem',
			},
			color: '#64748b',
			textTransform: 'uppercase',
			letterSpacing: '0.15em',
		},

		// Services
		Services: {
			display: 'flex',
			flexWrap: 'wrap',
			gap: '0.5rem',
			justifyContent: 'center',
			margin: {
				bottom: '2.5rem',
			},
			animationName: 'fadeInUp',
			animationDuration: '1s',
			animationDelay: '0.2s',
			animationFillMode: 'both',
		},

		Service_tag1: {
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '1rem',
				right: '1rem',
			},
			backgroundColor: 'rgba(99, 102, 241, 0.1)',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(99, 102, 241, 0.2)',
			borderRadius: '100px',
			font: {
				size: '0.85rem',
			},
			color: '#94a3b8',
			transition: 'all 0.3s',
			cursor: 'default',
			':hover': {
				backgroundColor: 'rgba(99, 102, 241, 0.2)',
				borderColor: '#6366f1',
				color: '#f8fafc',
				transform: 'translateY(-2px)',
			},
		},

		Service_tag2: {
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '1rem',
				right: '1rem',
			},
			backgroundColor: 'rgba(99, 102, 241, 0.1)',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(99, 102, 241, 0.2)',
			borderRadius: '100px',
			font: {
				size: '0.85rem',
			},
			color: '#94a3b8',
			transition: 'all 0.3s',
			cursor: 'default',
			':hover': {
				backgroundColor: 'rgba(99, 102, 241, 0.2)',
				borderColor: '#6366f1',
				color: '#f8fafc',
				transform: 'translateY(-2px)',
			},
		},

		Service_tag3: {
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '1rem',
				right: '1rem',
			},
			backgroundColor: 'rgba(99, 102, 241, 0.1)',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(99, 102, 241, 0.2)',
			borderRadius: '100px',
			font: {
				size: '0.85rem',
			},
			color: '#94a3b8',
			transition: 'all 0.3s',
			cursor: 'default',
			':hover': {
				backgroundColor: 'rgba(99, 102, 241, 0.2)',
				borderColor: '#6366f1',
				color: '#f8fafc',
				transform: 'translateY(-2px)',
			},
		},

		Service_tag4: {
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '1rem',
				right: '1rem',
			},
			backgroundColor: 'rgba(99, 102, 241, 0.1)',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(99, 102, 241, 0.2)',
			borderRadius: '100px',
			font: {
				size: '0.85rem',
			},
			color: '#94a3b8',
			transition: 'all 0.3s',
			cursor: 'default',
			':hover': {
				backgroundColor: 'rgba(99, 102, 241, 0.2)',
				borderColor: '#6366f1',
				color: '#f8fafc',
				transform: 'translateY(-2px)',
			},
		},

		Service_tag5: {
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '1rem',
				right: '1rem',
			},
			backgroundColor: 'rgba(99, 102, 241, 0.1)',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(99, 102, 241, 0.2)',
			borderRadius: '100px',
			font: {
				size: '0.85rem',
			},
			color: '#94a3b8',
			transition: 'all 0.3s',
			cursor: 'default',
			':hover': {
				backgroundColor: 'rgba(99, 102, 241, 0.2)',
				borderColor: '#6366f1',
				color: '#f8fafc',
				transform: 'translateY(-2px)',
			},
		},

		// Divider
		Divider: {
			height: '1px',
			background: {
				image: [['linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)']],
			},
			margin: {
				top: '2rem',
				bottom: '2rem',
			},
		},

		// Contacts
		Contacts_title: {
			font: {
				family: 'monospace',
				size: '0.75rem',
			},
			color: '#64748b',
			textTransform: 'uppercase',
			letterSpacing: '0.2em',
			textAlign: 'center',
			margin: {
				bottom: '1.25rem',
			},
		},

		Contacts: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			animationName: 'fadeInUp',
			animationDuration: '1s',
			animationDelay: '0.4s',
			animationFillMode: 'both',
		},

		// Contact buttons
		Contact_erik: {
			display: 'flex',
			alignItems: 'center',
			gap: '1rem',
			padding: {
				top: '1rem',
				bottom: '1rem',
				left: '1.5rem',
				right: '1.5rem',
			},
			backgroundColor: 'rgba(255, 255, 255, 0.03)',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(255, 255, 255, 0.08)',
			borderRadius: '16px',
			textDecoration: 'none',
			transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
			position: 'relative',
			overflow: 'hidden',
			':hover': {
				borderColor: 'rgba(99, 102, 241, 0.4)',
				transform: 'translateY(-4px)',
				boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.3)',
			},
		},

		Contact_erik_icon: {
			position: 'relative',
			width: '48px',
			height: '48px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: {
				image: [['linear-gradient(135deg, #0088cc, #00a8e8)']],
			},
			borderRadius: '12px',
			flexShrink: '0',
		},

		Contact_erik_svg: {
			width: '24px',
			height: '24px',
			fill: 'white',
		},

		Contact_erik_info: {
			position: 'relative',
			flex: {
				grow: 1,
			},
		},

		Contact_erik_name: {
			font: {
				size: '1.1rem',
				weight: 600,
			},
			color: '#f8fafc',
			margin: {
				bottom: '0.25rem',
			},
		},

		Contact_erik_handle: {
			font: {
				family: 'monospace',
				size: '0.85rem',
			},
			color: '#64748b',
		},

		Contact_erik_arrow: {
			position: 'relative',
			width: '20px',
			height: '20px',
			stroke: '#64748b',
			strokeWidth: '2',
			fill: 'none',
			transition: 'all 0.3s',
		},

		Contact_tg: {
			display: 'flex',
			alignItems: 'center',
			gap: '1rem',
			padding: {
				top: '1rem',
				bottom: '1rem',
				left: '1.5rem',
				right: '1.5rem',
			},
			backgroundColor: 'rgba(255, 255, 255, 0.03)',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'rgba(255, 255, 255, 0.08)',
			borderRadius: '16px',
			textDecoration: 'none',
			transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
			position: 'relative',
			overflow: 'hidden',
			':hover': {
				borderColor: 'rgba(99, 102, 241, 0.4)',
				transform: 'translateY(-4px)',
				boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.3)',
			},
		},

		Contact_tg_icon: {
			position: 'relative',
			width: '48px',
			height: '48px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: {
				image: [['linear-gradient(135deg, #0088cc, #00a8e8)']],
			},
			borderRadius: '12px',
			flexShrink: '0',
		},

		Contact_tg_svg: {
			width: '24px',
			height: '24px',
			fill: 'white',
		},

		Contact_tg_info: {
			position: 'relative',
			flex: {
				grow: 1,
			},
		},

		Contact_tg_name: {
			font: {
				size: '1.1rem',
				weight: 600,
			},
			color: '#f8fafc',
			margin: {
				bottom: '0.25rem',
			},
		},

		Contact_tg_handle: {
			font: {
				family: 'monospace',
				size: '0.85rem',
			},
			color: '#64748b',
		},

		Contact_tg_arrow: {
			position: 'relative',
			width: '20px',
			height: '20px',
			stroke: '#64748b',
			strokeWidth: '2',
			fill: 'none',
			transition: 'all 0.3s',
		},

		// Footer
		Footer: {
			margin: {
				top: '2rem',
			},
			textAlign: 'center',
			animationName: 'fadeInUp',
			animationDuration: '1s',
			animationDelay: '0.6s',
			animationFillMode: 'both',
		},

		Footer_text: {
			font: {
				family: 'monospace',
				size: '0.75rem',
			},
			color: '#64748b',
			letterSpacing: '0.1em',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '0.25rem',
		},

		Footer_text_before: {
			display: 'inline',
		},

		Footer_heart: {
			color: '#ec4899',
			display: 'inline',
		},

		Footer_text_after: {
			display: 'inline',
		},
	})

	// CSS animations
	$mol_style_attach(
		'bog_card_animations',
		`
		@keyframes pulse {
			0%, 100% { opacity: 1; transform: scale(1); }
			50% { opacity: 0.8; transform: scale(1.05); }
		}

		@keyframes float1 {
			0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
			50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
		}

		@keyframes float2 {
			0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
			50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
		}

		@keyframes float3 {
			0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
			50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
		}

		@keyframes float4 {
			0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
			50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
		}

		@keyframes float5 {
			0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
			50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
		}

		@keyframes float6 {
			0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
			50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
		}

		@keyframes cardEntry {
			from {
				opacity: 0;
				transform: translateY(40px) scale(0.95);
			}
			to {
				opacity: 1;
				transform: translateY(0) scale(1);
			}
		}

		@keyframes logoFloat {
			0%, 100% { transform: translateY(0); }
			50% { transform: translateY(-8px); }
		}

		@keyframes fadeInUp {
			from {
				opacity: 0;
				transform: translateY(20px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@media (max-width: 480px) {
			[mol_theme] .$bog_card {
				padding: 0;
			}
			
			[mol_theme] .$bog_card > .$bog_card_Card {
				padding: 2rem 1.5rem;
			}
			
			[mol_theme] .$bog_card > .$bog_card_Card > .$bog_card_Header > .$bog_card_Title {
				font-size: 1.6rem;
			}
		}
	`,
	)
}
