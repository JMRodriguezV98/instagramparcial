import React from 'react';
import PincardHistory from './PincardHistory';
import HorizontalScroll from 'react-scroll-horizontal';


const Historypin = () => {
    const _styleHistory = {
        containerHistory:{
            cursor:'pointer',
            position:'relative', 
        },
        PinContainerUsers:{
            marginTop: '-30px',
            padding: 0,
            backgroundColor:'white',
            border:'1px solid rgba(182, 182, 182, 0.774)',
            width:'31%',
            height:'12.5%',
            position: 'absolute',
            left: '42%',
            top:'12%',
            transform: 'translateX(-50%)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 140px)',
            gridAutoRows: '100px',
            justifyContent: 'center',
        },
        scroll: {
            width: '400%',
            height: '100%',
        }
    }
    return (
        <div >
            <div style={{..._styleHistory.PinContainerUsers}}>
                <HorizontalScroll style={{..._styleHistory.scroll}} reverseScroll={true}>
                    <PincardHistory size='small' image='https://picsum.photos//250/260' />
                    <PincardHistory size='small' image='https://picsum.photos/250/260' />
                    <PincardHistory size='small' image='https://picsum.photos/250/260' />
                    <PincardHistory size='small' image='https://picsum.photos/seed/picsum/250/260' />
                    <PincardHistory size='small' image='https://picsum.photos/250/260' />
                </HorizontalScroll>
            </div>
            
            
        </div>
    )
}

export default Historypin;