//### OUTTER PANEL SETTINGS ###
export const aboutOptions = {
    //panel id used for locating elements for styling
    panelID: 'about',
    //The text that appears at the top of the panel
    panelHeaderText: 'ABOUT',
    
    //### OUTTER PANEL STYLES ###
    panelStyles: {
        //Primary outter container styles
        panelContainer: {
            backgroundColor: 'var(--doc-secondary-background-color)',
            borderRadius: '10px',
            minHeight: '260px',
            position: 'relative',
            margin: '1rem 0'
        },
        //Header text styles
        panelHeaderText: {
            textAlign: 'center',
            fontSize: '32pt',
            color: 'var(--doc-font-color)',
            textShadow: '0px 6px 10px rgba(0,0,0,40%)',
            userSelect: 'none'
        },
        //Panel top right triangle
        panelTopExtra: {
            position: 'absolute',
            width: '0',
            height: '0',
            top: '-48px',
            left: '0',
            borderBottom: '60px solid var(--doc-secondary-background-color)',
            borderRight: '60px solid transparent',
            zIndex: '3'
        },
        //Panel bottom right triangle
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
    }
}

//### INNER SECTION OPTIONS ###
export const aboutSection = {
    //Text to show within the about sections
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
    
    //### INNER SECTION STYLES ###
    aboutStyles: {
        //Primary inner container styles
        aboutContainer: {
            position: 'relative',
            maxHeight: '280px',
        },
        //About text container styles
        aboutTextContainer: {
            padding: '0.2em 1em',
            maxHeight: '280px',
            overflowY: 'scroll',
            zIndex: '0'
        },
        //About text styles
        aboutText: {
            fontSize: '13pt',
            textAlign: 'center',
            padding: '0 0 4px 0',
            zIndex: '2'
        },
        //Section bottom blurred area
        bottomExtra: {
            position: 'absolute',
            display: 'flex',
            background: 'var(--doc-background-color)',
            opacity: '58%',
            borderRadius: '2px',
            filter: 'blur(12px)',
            width: '90%',
            height: '20px',
            bottom: '0',
            left: '50%',
            transform: 'translate(-52%, 0)',
            zIndex: '2',
        }
    }
}