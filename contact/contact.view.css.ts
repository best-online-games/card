namespace $.$$ {
    $mol_style_define($bog_card_contact, {
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
		
        Contact_icon: {
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

        Contact_svg: {
            width: '24px',
            height: '24px',
            fill: 'white',
        },

        Contact_info: {
			position: 'relative',
			alignItems: 'center',
            flex: {
                grow: 1,
            },
        },

        Contact_name: {
            font: {
                size: '1.1rem',
                weight: 600,
            },
            color: '#f8fafc',
        },

        Contact_handle: {
            font: {
                family: 'monospace',
                size: '0.85rem',
            },
            color: '#64748b',
        },

        Contact_arrow: {
            position: 'relative',
            width: '20px',
            height: '20px',
            stroke: '#64748b',
            strokeWidth: '2',
            fill: 'none',
            transition: 'all 0.3s',
        },
    })
}
