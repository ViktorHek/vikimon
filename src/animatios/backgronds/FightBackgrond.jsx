import MenuBackgrond from './MenuBackgrond'
import Font from '../font/Font'


const FightBackgrond = () => {

    const menuPositioning1 = { top: 0, left: 0, right: 152, bottom: 40 }
    const menuPositioning2 = { top: 0, left: 0, right: 88, bottom: 40 }


    return (
        <div className="fight-backgrond-component-container">
            <div className='fight-menu-backgrond-container'>
                <MenuBackgrond position={menuPositioning1} />
            </div>
            <div className='fight-init-options-menu-container'>
                <MenuBackgrond position={menuPositioning2} />
                <div className='fight-init-select-fight-text'>
                    <Font text="FIGHT" />
                </div>
                <div className='fight-init-select-pokemon-text'>
                    <Font text="MON" />
                </div>
                <div className='fight-init-select-item-text'>
                    <Font text="ITEM" />
                </div>
                <div className='fight-init-select-run-text'>
                    <Font text="RUN" />
                </div>
            </div>
            <div className="fight-svg-backgrond-container">
                <svg width="160" height="144" viewBox="0 0 160 144" fill="none">
                    <rect x="11" y="16" width="2" height="12" fill="black" />
                    <rect x="12" y="28" width="1" height="1" fill="black" />
                    <rect x="13" y="27" width="73" height="2" fill="black" />
                    <rect x="80" y="25" width="2" height="2" fill="black" />
                    <rect x="80" y="19" width="1" height="2" fill="black" />
                    <rect x="32" y="18" width="48" height="1" fill="black" />
                    <rect x="31" y="19" width="1" height="2" fill="black" />
                    <rect x="22" y="18" width="2" height="4" fill="black" />
                    <rect x="17" y="18" width="2" height="4" fill="black" />
                    <rect x="19" y="20" width="1" height="1" fill="black" />
                    <rect x="20" y="18" width="1" height="4" fill="black" />
                    <rect x="24" y="18" width="1" height="1" fill="black" />
                    <rect x="24" y="20" width="1" height="1" fill="black" />
                    <rect x="25" y="18" width="1" height="3" fill="black" />
                    <rect x="27" y="19" width="1" height="1" fill="black" />
                    <rect x="33" y="11" width="1" height="1" fill="black" />
                    <rect x="33" y="13" width="1" height="1" fill="black" />
                    <rect x="35" y="10" width="2" height="5" fill="black" />
                    <rect x="37" y="14" width="2" height="1" fill="black" />
                    <rect x="27" y="21" width="1" height="1" fill="black" />
                    <rect x="32" y="21" width="48" height="1" fill="black" />
                    <rect x="82" y="26" width="2" height="1" fill="black" />
                    <rect x="86" y="28" width="2" height="1" fill="black" />
                    <path d="M113 67H114V68H113V67Z" fill="black" />
                    <path d="M78 89H80V91H78V89Z" fill="black" />
                    <path d="M91 75H92V76H91V75Z" fill="black" />
                    <path d="M91 77H92V78H91V77Z" fill="black" />
                    <path d="M88 76H89V77H88V76Z" fill="black" />
                    <path d="M88 74H89V75H88V74Z" fill="black" />
                    <path d="M89 74H90V77H89V74Z" fill="black" />
                    <path d="M86 74H88V78H86V74Z" fill="black" />
                    <path d="M84 74H85V78H84V74Z" fill="black" />
                    <path d="M83 76H84V77H83V76Z" fill="black" />
                    <path d="M81 74H83V78H81V74Z" fill="black" />
                    <path d="M112 87H113V88H112V87Z" fill="black" />
                    <path d="M113 86H114V87H113V86Z" fill="black" />
                    <path d="M114 85H115V86H114V85Z" fill="black" />
                    <path d="M115 84H116V85H115V84Z" fill="black" />
                    <path d="M116 83H117V84H116V83Z" fill="black" />
                    <path d="M117 82H118V83H117V82Z" fill="black" />
                    <path d="M118 81H119V82H118V81Z" fill="black" />
                    <path d="M76 90H78V91H76V90Z" fill="black" />
                    <path d="M72 92H74V93H72V92Z" fill="black" />
                    <rect x="113" y="69" width="1" height="1" fill="black" />
                    <rect x="96" y="74" width="48" height="1" fill="black" />
                    <rect x="95" y="75" width="1" height="2" fill="black" />
                    <rect x="144" y="75" width="1" height="2" fill="black" />
                    <rect x="96" y="77" width="48" height="1" fill="black" />
                    <rect x="115" y="66" width="2" height="5" fill="black" />
                    <rect x="117" y="70" width="2" height="1" fill="black" />
                    <rect x="147" y="72" width="2" height="20" fill="black" />
                    <rect x="147" y="92" width="1" height="1" fill="black" />
                    <rect x="74" y="91" width="73" height="2" fill="black" />
                </svg>
            </div>
        </div>
    )
}

export default FightBackgrond