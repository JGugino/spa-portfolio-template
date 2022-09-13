export const aboutOptions = {
    panelID: 'about',
    panelHeaderText: 'ABOUT',
    panelStyles: {
        panelContainer: {
            backgroundColor: 'var(--doc-secondary-background-color)',
            borderRadius: '10px',
            minHeight: '260px',
            position: 'relative',
            margin: '1rem 0'
        },
        panelHeaderText: {
            textAlign: 'center',
            fontSize: '32pt',
            color: 'var(--doc-font-color)',
            textShadow: '0px 6px 10px rgba(0,0,0,40%)',
            userSelect: 'none'
        },
        panelTopExtra: {
            position: 'absolute',
            width: '0',
            height: '0',
            top: '-48px',
            left: '0',
            borderBottom: '60px solid var(--doc-secondary-background-color)',
            borderRight: '60px solid transparent',
        },
        panelBottomExtra: {
            position: 'absolute',
            width: '0',
            height: '0',
            bottom: '-48px',
            right: '0',
            borderTop: '60px solid var(--doc-secondary-background-color)',
            borderLeft: '60px solid transparent',
            zIndex: '1'
        }
    },
    aboutSection: {
        aboutText: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, id corrupti. 
        Esse expedita et exercitationem unde autem pariatur dolorum sit nam officia architecto 
        enim delectus quidem blanditiis temporibus quis itaque fugit ex voluptates atque quae nostrum,
        reprehenderit minus. Accusantium doloribus sapiente nesciunt consequuntur culpa provident
        rem sit, nostrum molestias facere aspernatur repellat in! Accusantium a ratione magni, dolor eligendi
        exercitationem ex impedit minus vel, velit qui ipsum animi quas quis tenetur repudiandae fugiat reiciendis
        culpa consequuntur itaque vitae vero laudantium. Delectus doloremque, deserunt ea et laboriosam dolore
        nostrum aperiam quis suscipit? Voluptatem quisquam error veritatis pariatur vitae architecto ratione corrupti 
        tenetur, nisi modi distinctio sed mollitia at cum illo consequatur atque quibusdam voluptates blanditiis vel vero
        nesciunt beatae doloremque nulla. Facilis doloribus voluptas dignissimos, impedit maxime, explicabo optio nisi
        vero esse beatae natus labore eum repudiandae a odit distinctio. Ullam, commodi tenetur officia natus ducimus
        quos officiis nihil necessitatibus velit mollitia maxime deserunt voluptatem facilis dignissimos distinctio 
        sunt id consectetur. Suscipit nam alias dignissimos laborum facere iure rerum reiciendis sed officia quaerat,
        provident vel sequi nihil nisi quia eveniet odio dicta velit dolore sapiente blanditiis minima recusandae! Blanditiis,
        iste excepturi. Eligendi dolore officiis, blanditiis distinctio quaerat facilis quibusdam ipsum dolor!`,
        aboutStyles: {
            aboutContainer: {
                padding: '0.2em 1em',
                maxHeight: '280px',
                overflowY: 'scroll'
            },
            aboutText: {
                fontSize: '13pt'
            },
            bottomExtra: {
                backgroundColor:  'red',
                width: '20px',
                height: '20px'
            }
        }
    }
}