import React from 'react';

const MainContent = (props) => {
    



    
    return (
        <main>
            {props.isLoading ? <p>Yükleniyor ..</p> : <div>Selamun aleykumgh</div>}
        </main>

    );

}



export default MainContent;