namespace $.$$ {

	const BOG_CARD_PARTICLE = {
        position: 'absolute',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        opacity: 0.4,
        animationName: 'float',
        animationDuration: '15s',
        animationIterationCount: 'infinite',
    } as const
	
	$mol_style_define($bog_card_particles, {
        position: 'fixed',
        inset: '0',
        pointerEvents: 'none',

        Particle1: {
            ...BOG_CARD_PARTICLE,
            left: '10%',
            top: '20%',
            backgroundColor: '#6366f1',
        },

        Particle2: {
            ...BOG_CARD_PARTICLE,
            left: '20%',
            top: '80%',
            backgroundColor: '#8b5cf6',
            animationDelay: '-2s',
        },

        Particle3: {
            ...BOG_CARD_PARTICLE,
            left: '60%',
            top: '10%',
            backgroundColor: '#6366f1',
            animationDelay: '-4s',
        },

        Particle4: {
            ...BOG_CARD_PARTICLE,
            left: '80%',
            top: '70%',
            backgroundColor: '#ec4899',
            animationDelay: '-6s',
        },

        Particle5: {
            ...BOG_CARD_PARTICLE,
            left: '40%',
            top: '50%',
            backgroundColor: '#6366f1',
            animationDelay: '-8s',
        },

        Particle6: {
            ...BOG_CARD_PARTICLE,
            left: '90%',
            top: '30%',
            backgroundColor: '#8b5cf6',
            animationDelay: '-10s',
        },
    })
	$mol_style_attach(
        'bog_card_particles_animations',
        `@keyframes float {
			0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
			50% { transform: translateY(-30px) scale(1.5); opacity: 0.7; }
		}`
    )
}
