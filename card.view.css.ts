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
			justifyContent: 'center',
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
