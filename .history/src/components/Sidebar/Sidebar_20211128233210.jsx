import closeIcon from '../../assets/icon-close.svg'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <aside>
                <div className="sidebar-header">
                    <button className="close-btn" type="button">
                        <img src={closeIcon} alt="closeIcon.svg" />
                    </button>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
