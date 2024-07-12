const MenuShimmer = () => {
    return (
        <div className="menu-shimmer-container">
            {Array(10)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="menu-item-shimmer-card">
                        <div className="menu-item-shimmer-content-card">
                            <div className="menu-item-name-shimmer-loader"></div>
                            <div className="menu-item-cusines-shimmer-loader"></div>
                        </div>
                        <div className="menu-item-image-shimmer-loader"></div>
                    </div>
                ))}
        </div>
    );
}

export default MenuShimmer;
