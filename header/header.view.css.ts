namespace $.$$ {
	
	$mol_style_define($bog_card_header, {
        flex: {
            direction: 'column',
        },
        textAlign: 'center',
        margin: {
            bottom: '2.5rem',
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

        Header: {
            alignItems: 'center',
            Label: {
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
            Content: {
                font: {
                    family: 'monospace',
                    size: '0.85rem',
                },
                paddingTop: '2rem',
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
            },
        },
    })
	
}
