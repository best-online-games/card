namespace $.$$ {
	
	$mol_style_define($bog_card_footer, {
        font: {
            family: 'monospace',
            size: '0.75rem',
        },
        margin: {
            top: '2rem',
        },
        color: '#64748b',
        letterSpacing: '0.1em',
        textAlign: 'center',
        animationName: 'fadeInUp',
        animationDuration: '1s',
        animationDelay: '0.6s',
        animationFillMode: 'both',
        justifyContent: 'center',
        gap: '1.5rem',

        Center: {
            color: '#ec4899',
        },
    })
	
	$mol_style_attach(
        'bog_card_footer_animations',
        `
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
	`
    )
	
}
