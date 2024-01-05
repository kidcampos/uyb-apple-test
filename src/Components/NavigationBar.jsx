import '../App.css'

const NavigationBar = props => {

    const handleHoverMenuItem = id => {
        document.querySelectorAll('.globalnav-item').forEach(el => {
            if(!el.classList.contains('globalnav-item-' + id)) {
                setTimeout(() => {
                    el.classList.remove("globalnav-item-flyout-open");
                }, 100);
            }
        })
        const globalnavHoverEl = document.querySelector('.globalnav-item.globalnav-item-' + id);
        globalnavHoverEl.classList.add('globalnav-item-flyout-open');
        const globalnavFlyout = document.querySelector(`#globalnav-submenu-link-${id}.globalnav-flyout`);
        if(globalnavFlyout) {
            globalnavFlyout.classList.add('globalnav-flyout-short')
        }
    }

    const handleLeaveHoverMenuItem = () => {
        document.querySelectorAll('.globalnav-item').forEach(el => {
            el.classList.remove("globalnav-item-flyout-open");
        })
    }
    return (
        <>
            <nav id="globalnav" lang="en-US" dir="ltr" style={{ "--r-globalnav-text-zoom-scale": '1', '--r-globalnav-scrollbar-width': '17px' }} className='globalnav js' onMouseLeave={handleLeaveHoverMenuItem}>

                <div className="globalnav-content">
                    <div className="globalnav-item globalnav-menuback">
                        <button aria-label="Main menu" className="globalnav-menuback-button">
                            <span className="globalnav-chevron-icon">
                                <svg height="48" viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m1.5618 24.0621 6.5581-6.4238c.2368-.2319.2407-.6118.0088-.8486-.2324-.2373-.6123-.2407-.8486-.0088l-7 6.8569c-.1157.1138-.1807.2695-.1802.4316.001.1621.0674.3174.1846.4297l7 6.7241c.1162.1118.2661.1675.4155.1675.1577 0 .3149-.062.4326-.1846.2295-.2388.2222-.6187-.0171-.8481z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <ul id="globalnav-list" className="globalnav-list">
                        <li className="globalnav-item globalnav-item-apple">
                            <a href="https://www.apple.com/" className="globalnav-link globalnav-link-apple">
                                <span className="globalnav-image-regular globalnav-link-image">
                                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z">
                                        </path>
                                    </svg>
                                </span>
                                <span className="globalnav-image-compact globalnav-link-image">
                                    <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z">
                                        </path>
                                    </svg>
                                </span>
                                <span className="globalnav-link-text">Apple</span>
                            </a>

                        </li>
                        <li data-topnav-flyout-item="menu" data-topnav-flyout-label="Menu" className="globalnav-item globalnav-menu">
                            <div data-topnav-flyout="menu" className="globalnav-flyout"
                                style={{ "--r-globalnav-flyout-item-total": "0", "--r-globalnav-flyout-group-number": "0" }}>
                                <div className="globalnav-menu-list" style={{ "--r-globalnav-flyout-item-total": "11" }}>
                                    <div data-analytics-element-engagement="globalnav hover - store" className="globalnav-item globalnav-item-store globalnav-item-menu globalnav-item-submenu" style={{ "--r-globalnav-flyout-item-number": "0" }}>
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item">
                                                <a
                                                href="https://www.apple.com/us/shop/goto/store"
                                                onMouseEnter={() => handleHoverMenuItem('store')}
                                                data-globalnav-item-name="store" data-topnav-flyout-trigger-compact=""
                                                data-analytics-title="store"
                                                data-analytics-element-engagement="hover - store" aria-label="Store"
                                                className="globalnav-link globalnav-submenu-trigger-link globalnav-link-store"><span
                                                    className="globalnav-link-text-container"><span
                                                        className="globalnav-image-regular globalnav-link-image"><svg
                                                            height="44" viewBox="0 0 30 44" width="30"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m26.5679 20.4629c1.002 0 1.67.738 1.693 1.857h-3.48c.076-1.119.779-1.857 1.787-1.857zm2.754 2.672v-.387c0-1.963-1.037-3.176-2.742-3.176-1.735 0-2.848 1.289-2.848 3.276 0 1.998 1.096 3.263 2.848 3.263 1.383 0 2.367-.668 2.66-1.746h-1.008c-.264.557-.814.856-1.629.856-1.072 0-1.769-.791-1.822-2.039v-.047zm-9.547-3.451h.96v.937h.094c.188-.615.914-1.049 1.752-1.049.164 0 .375.012.504.03v1.007c-.082-.023-.445-.058-.644-.058-.961 0-1.659 1.098-1.659 1.535v3.914h-1.007zm-4.27 5.519c-1.195 0-1.869-.867-1.869-2.361 0-1.5.674-2.361 1.869-2.361 1.196 0 1.87.861 1.87 2.361 0 1.494-.674 2.361-1.87 2.361zm0-5.631c-1.798 0-2.912 1.237-2.912 3.27 0 2.027 1.114 3.269 2.912 3.269 1.799 0 2.913-1.242 2.913-3.269 0-2.033-1.114-3.27-2.913-3.27zm-5.478-1.475v1.635h1.407v.843h-1.407v3.575c0 .744.282 1.06.938 1.06.182 0 .281-.006.469-.023v.849c-.199.035-.393.059-.592.059-1.301 0-1.822-.481-1.822-1.688v-3.832h-1.02v-.843h1.02v-1.635zm-8.103 5.694c.129.885.973 1.447 2.174 1.447 1.137 0 1.975-.615 1.975-1.453 0-.72-.527-1.177-1.693-1.47l-1.084-.282c-1.53-.386-2.192-1.078-2.192-2.279 0-1.436 1.201-2.408 2.988-2.408 1.635 0 2.854.972 2.942 2.338h-1.061c-.146-.867-.861-1.383-1.916-1.383-1.125 0-1.869.562-1.869 1.418 0 .662.463 1.043 1.629 1.342l.885.234c1.752.439 2.455 1.119 2.455 2.361 0 1.553-1.225 2.543-3.158 2.543-1.793 0-3.03-.949-3.141-2.408z">
                                                            </path>
                                                        </svg></span><span
                                                            className="globalnav-link-text">Store</span></span><span
                                                                className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                                    width="9" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                        </path>
                                                    </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                id="globalnav-menubutton-link-store"
                                                className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                aria-controls="globalnav-submenu-link-store" aria-label="Store menu"
                                                data-topnav-flyout-trigger-regular="true"><span
                                                    className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                        height="10" viewBox="0 0 10 10" width="10"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                        </path>
                                                    </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                        </path>
                                                    </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-store" className="globalnav-flyout globalnav-submenu" aria-labelledby="globalnav-menubutton-link-store" style={{ "--r-globalnav-flyout-item-total": "0", "--r-globalnav-flyout-group-number": "0", "--r-globalnav-flyout-height": "414px", "--r-globalnav-flyout-rate": "240ms" }}>
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content" style={{ "--r-globalnav-flyout-elevated-group-count": "1", "--r-globalnav-flyout-group-total": "2", "--r-globalnav-flyout-item-total": "7" }}>
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated" data-analytics-region="explore shop" style={{ "--r-globalnav-flyout-group-number": "0" }}>
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="c64e0a00"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Shop
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="c64e0a00">
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/store"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop the latest"
                                                                    aria-label="Shop the latest Apple products"
                                                                >
                                                                    Shop the Latest
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_mac"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac"
                                                                >
                                                                    Mac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_ipad"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ipad"
                                                                >
                                                                    iPad
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_iphone"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone"
                                                                >
                                                                    iPhone
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "6" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_watch"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch"
                                                                >
                                                                    Apple Watch
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "7" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="accessories"
                                                                >
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div
                                                        className="globalnav-submenu-group"
                                                        data-analytics-region="quick links - store"
                                                        style={{ "--r-globalnav-flyout-group-number": "1" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="1c90bcf2"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Quick Links
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="1c90bcf2">
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/retail/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="find a store"
                                                                >
                                                                    Find a Store
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/order/list"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="order status"
                                                                >
                                                                    Order Status
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/trade_in"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple trade in"
                                                                >
                                                                    Apple Trade In
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/payment_plan"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="financing"
                                                                >
                                                                    Financing
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div
                                                        className="globalnav-submenu-group"
                                                        data-analytics-region="shop special stores"
                                                        style={{ "--r-globalnav-flyout-group-number": "2" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="68805228"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Shop Special Stores
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="68805228">
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/special_deals"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="certified refurbished"
                                                                >
                                                                    Certified Refurbished
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/educationrouting"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="education"
                                                                >
                                                                    Education
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/retail/business/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="business"
                                                                >
                                                                    Business
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="veterans and military"
                                                                >
                                                                    Veterans and Military
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "6" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/r/store/government/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="government"
                                                                >
                                                                    Government
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        data-analytics-element-engagement="globalnav hover - mac"
                                        className="globalnav-item globalnav-item-mac globalnav-item-menu globalnav-item-submenu"
                                        style={{ "--r-globalnav-flyout-item-number": "1" }}
                                    >
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item">
                                                <a
                                                    onMouseEnter={() => handleHoverMenuItem('mac')}
                                                    href="https://www.apple.com/mac/"
                                                    data-globalnav-item-name="mac"
                                                    data-topnav-flyout-trigger-compact=""
                                                    data-analytics-title="mac"
                                                    data-analytics-element-engagement="hover - mac"
                                                    aria-label="Mac"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-mac"
                                                >
                                                    <span
                                                    className="globalnav-link-text-container"><span
                                                        className="globalnav-image-regular globalnav-link-image"><svg
                                                            height="44" viewBox="0 0 23 44" width="23"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1558 25.9987v-6.457h-.0703l-2.666 6.457h-.8907l-2.666-6.457h-.0703v6.457h-.9844v-8.4551h1.2246l2.8945 7.0547h.0938l2.8945-7.0547h1.2246v8.4551zm2.5166-1.7696c0-1.1309.832-1.7812 2.3027-1.8691l1.8223-.1113v-.5742c0-.7793-.4863-1.207-1.4297-1.207-.7559 0-1.2832.2871-1.4238.7852h-1.0195c.1348-1.0137 1.1309-1.6816 2.4785-1.6816 1.541 0 2.4023.791 2.4023 2.1035v4.3242h-.9609v-.9318h-.0938c-.4102.6738-1.1016 1.043-1.9453 1.043-1.2246 0-2.1328-.7266-2.1328-1.8809zm4.125-.5859v-.5801l-1.6992.1113c-.9609.0645-1.3828.3984-1.3828 1.0312 0 .6445.5449 1.0195 1.2773 1.0195 1.0371.0001 1.8047-.6796 1.8047-1.5819zm6.958-2.0273c-.1641-.627-.7207-1.1367-1.6289-1.1367-1.1367 0-1.8516.9082-1.8516 2.3379 0 1.459.7266 2.3848 1.8516 2.3848.8496 0 1.4414-.3926 1.6289-1.1074h1.0195c-.1816 1.1602-1.125 2.0156-2.6426 2.0156-1.7695 0-2.9004-1.2832-2.9004-3.293 0-1.9688 1.125-3.2461 2.8945-3.2461 1.5352 0 2.4727.9199 2.6484 2.0449z">
                                                            </path>
                                                        </svg></span><span
                                                            className="globalnav-link-text">Mac</span></span><span
                                                                className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                                    width="9" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                        </path>
                                                    </svg></span>
                                                </a>
                                            </li>
                                            <li className="globalnav-submenu-trigger-item">
                                                <button
                                                    id="globalnav-menubutton-link-mac"
                                                    className="globalnav-submenu-trigger-button"
                                                    aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-mac"
                                                    aria-label="Mac menu"
                                                    data-topnav-flyout-trigger-regular="true"
                                                >
                                                    <span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                            className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                                height="48" viewBox="0 0 9 48" width="9"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span>
                                                </button>
                                            </li>
                                        </ul>
                                        <div
                                            id="globalnav-submenu-link-mac"
                                            className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-mac"
                                            style={{
                                                "--r-globalnav-flyout-item-total": "0",
                                                "--r-globalnav-flyout-group-number": "0",
                                                "--r-globalnav-flyout-height": "552px",
                                                "--r-globalnav-flyout-rate": "254ms"
                                            }}
                                        >
                                            <div className="globalnav-flyout-scroll-container">
                                                <div
                                                    className="globalnav-flyout-content globalnav-submenu-content"
                                                    style={{
                                                        "--r-globalnav-flyout-elevated-group-count": "1",
                                                        "--r-globalnav-flyout-group-total": "2",
                                                        "--r-globalnav-flyout-item-total": "11"
                                                    }}
                                                >
                                                    <div
                                                        className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore mac"
                                                        style={{ "--r-globalnav-flyout-group-number": "0" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="5d48857a"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Explore Mac
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="5d48857a">
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/mac/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore all mac"
                                                                >
                                                                    Explore All Mac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/macbook-air/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="macbook air"
                                                                >
                                                                    MacBook Air
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/macbook-pro/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="macbook pro"
                                                                >
                                                                    MacBook Pro
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/imac/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="imac"
                                                                    aria-label="iMac"
                                                                >
                                                                    iMac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "6" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/mac-mini/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac mini"
                                                                >
                                                                    Mac mini
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "7" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/mac-studio/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac studio"
                                                                >
                                                                    Mac Studio
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "8" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/mac-pro/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac pro"
                                                                >
                                                                    Mac Pro
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "9" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/displays/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="displays"
                                                                >
                                                                    Displays
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "10" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/mac/compare/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="compare mac"
                                                                >
                                                                    Compare Mac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "11" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/mac/mac-does-that/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac does that"
                                                                >
                                                                    Mac Does That
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div
                                                        className="globalnav-submenu-group"
                                                        data-analytics-region="shop mac"
                                                        style={{ "--r-globalnav-flyout-group-number": "1" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="62dd6e22"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Shop Mac
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="62dd6e22">
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_mac"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop mac"
                                                                >
                                                                    Shop Mac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/mac/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac accessories"
                                                                >
                                                                    Mac Accessories
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/trade_in"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple trade in"
                                                                >
                                                                    Apple Trade In
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/payment_plan"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="financing"
                                                                >
                                                                    Financing
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div
                                                        className="globalnav-submenu-group"
                                                        data-analytics-region="more from mac"
                                                        style={{ "--r-globalnav-flyout-group-number": "2" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="bb641a58"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            More from Mac
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="bb641a58">
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://support.apple.com/mac?cid=gn-ols-mac-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-exit-link="true"
                                                                    data-analytics-title="mac support"
                                                                >
                                                                    Mac Support
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/support/products/mac/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="applecare+ for mac"
                                                                >
                                                                    AppleCare+ for Mac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/macos/sonoma/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="macos sonoma"
                                                                >
                                                                    macOS Sonoma
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/apps/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apps by apple"
                                                                >
                                                                    Apps by Apple
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "6" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/macos/continuity/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="continuity"
                                                                >
                                                                    Continuity
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "7" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/icloud/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="icloud+"
                                                                >
                                                                    iCloud+
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "8" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/business/mac/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac for business"
                                                                >
                                                                    Mac for Business
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "9" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/education/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="education"
                                                                >
                                                                    Education
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div data-analytics-element-engagement="globalnav hover - ipad" className="globalnav-item globalnav-item-ipad globalnav-item-menu globalnav-item-submenu" style={{"--r-globalnav-flyout-item-number": "2"}}>
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item">
                                                <a
                                                    onMouseEnter={() => handleHoverMenuItem('ipad')}
                                                    href="https://www.apple.com/ipad/"
                                                    data-globalnav-item-name="ipad"
                                                    data-topnav-flyout-trigger-compact=""
                                                    data-analytics-title="ipad"
                                                    data-analytics-element-engagement="hover - ipad"
                                                    aria-label="iPad"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-ipad"
                                                >
                                                    <span className="globalnav-link-text-container">
                                                        <span className="globalnav-image-regular globalnav-link-image">
                                                            <svg height="44" viewBox="0 0 24 44" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="m14.9575 23.7002c0 .902-.768 1.582-1.805 1.582-.732 0-1.277-.375-1.277-1.02 0-.632.422-.966 1.383-1.031l1.699-.111zm-1.395-4.072c-1.347 0-2.343.668-2.478 1.681h1.019c.141-.498.668-.785 1.424-.785.944 0 1.43.428 1.43 1.207v.574l-1.822.112c-1.471.088-2.303.738-2.303 1.869 0 1.154.908 1.881 2.133 1.881.844 0 1.535-.369 1.945-1.043h.094v.931h.961v-4.324c0-1.312-.862-2.103-2.403-2.103zm6.769 5.575c-1.155 0-1.846-.885-1.846-2.361 0-1.471.697-2.362 1.846-2.362 1.142 0 1.857.914 1.857 2.362 0 1.459-.709 2.361-1.857 2.361zm1.834-8.027v3.503h-.088c-.358-.691-1.102-1.107-1.981-1.107-1.605 0-2.654 1.289-2.654 3.27 0 1.986 1.037 3.269 2.654 3.269.873 0 1.623-.416 2.022-1.119h.093v1.008h.961v-8.824zm-15.394 4.869h-1.863v-3.563h1.863c1.225 0 1.899.639 1.899 1.799 0 1.119-.697 1.764-1.899 1.764zm.276-4.5h-3.194v8.455h1.055v-3.018h2.127c1.588 0 2.719-1.119 2.719-2.701 0-1.611-1.108-2.736-2.707-2.736zm-6.064 8.454h1.008v-6.316h-1.008zm-.199-8.237c0-.387.316-.704.703-.704s.703.317.703.704c0 .386-.316.703-.703.703s-.703-.317-.703-.703z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span className="globalnav-link-text">iPad</span>
                                                    </span>
                                                    <span className="globalnav-link-chevron">
                                                        <svg height="48" viewBox="0 0 9 48" width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>

                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-ipad"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-ipad" aria-label="iPad menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div
                                            id="globalnav-submenu-link-ipad"
                                            className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-ipad"
                                            style={{
                                                "--r-globalnav-flyout-item-total": "0",
                                                "--r-globalnav-flyout-group-number": "0",
                                                "--r-globalnav-flyout-height": "514px",
                                                "--r-globalnav-flyout-rate": "240ms"
                                            }}
                                        >
                                            <div className="globalnav-flyout-scroll-container">
                                                <div
                                                    className="globalnav-flyout-content globalnav-submenu-content"
                                                    style={{
                                                        "--r-globalnav-flyout-elevated-group-count": "1",
                                                        "--r-globalnav-flyout-group-total": "2",
                                                        "--r-globalnav-flyout-item-total": "10"
                                                    }}
                                                >
                                                    {/* Submenu Group - Explore iPad */}
                                                    
                                                    <div
                                                        className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore ipad"
                                                        style={{ "--r-globalnav-flyout-group-number": "0" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="47cb20e0"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Explore iPad
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="47cb20e0">
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore all ipad"
                                                                >
                                                                    Explore All iPad
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad-pro/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ipad pro"
                                                                >
                                                                    iPad Pro
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad-air/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ipad air"
                                                                >
                                                                    iPad Air
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad-select/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ipad"
                                                                    aria-label="iPad 10.2"
                                                                >
                                                                    iPad
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "6" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad-mini/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ipad mini"
                                                                >
                                                                    iPad mini
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "7" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/apple-pencil/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple pencil"
                                                                >
                                                                    Apple Pencil
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "8" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad-keyboards/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="keyboards"
                                                                >
                                                                    Keyboards
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "9" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad/compare/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="compare ipad"
                                                                >
                                                                    Compare iPad
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "10" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/ipad/why-ipad/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="why ipad"
                                                                >
                                                                    Why iPad
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        {/* List items for "Explore iPad" */}
                                                        {/* ... */}
                                                    </div>

                                                    {/* Submenu Group - Shop iPad */}
                                                    <div
                                                        className="globalnav-submenu-group"
                                                        data-analytics-region="shop mac"
                                                        style={{ "--r-globalnav-flyout-group-number": "1" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="62dd6e22"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Shop Mac
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="62dd6e22">
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_mac"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop mac"
                                                                >
                                                                    Shop Mac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/mac/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac accessories"
                                                                >
                                                                    Mac Accessories
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/trade_in"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple trade in"
                                                                >
                                                                    Apple Trade In
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/payment_plan"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="financing"
                                                                >
                                                                    Financing
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div
                                                        className="globalnav-submenu-group"
                                                        data-analytics-region="more from mac"
                                                        style={{ "--r-globalnav-flyout-group-number": "2" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="bb641a58"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            More from Mac
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="bb641a58">
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://support.apple.com/mac?cid=gn-ols-mac-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-exit-link="true"
                                                                    data-analytics-title="mac support"
                                                                >
                                                                    Mac Support
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/support/products/mac/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="applecare+ for mac"
                                                                >
                                                                    AppleCare+ for Mac
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/macos/sonoma/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="macos sonoma"
                                                                >
                                                                    macOS Sonoma
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/apps/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apps by apple"
                                                                >
                                                                    Apps by Apple
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "6" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/macos/continuity/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="continuity"
                                                                >
                                                                    Continuity
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "7" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/icloud/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="icloud+"
                                                                >
                                                                    iCloud+
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "8" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/business/mac/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac for business"
                                                                >
                                                                    Mac for Business
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "9" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/education/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="education"
                                                                >
                                                                    Education
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    {/* <div data-analytics-element-engagement="globalnav hover - iphone" className="globalnav-item globalnav-item-iphone globalnav-item-menu globalnav-item-submenu" style="--r-globalnav-flyout-item-number: 3;">
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://www.apple.com/iphone/" data-globalnav-item-name="iphone"
                                                    data-topnav-flyout-trigger-compact="" data-analytics-title="iphone"
                                                    data-analytics-element-engagement="hover - iphone" aria-label="iPhone"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-iphone"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                height="44" viewBox="0 0 38 44" width="38"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="m32.7129 22.3203h3.48c-.023-1.119-.691-1.857-1.693-1.857-1.008 0-1.711.738-1.787 1.857zm4.459 2.045c-.293 1.078-1.277 1.746-2.66 1.746-1.752 0-2.848-1.266-2.848-3.264 0-1.986 1.113-3.275 2.848-3.275 1.705 0 2.742 1.213 2.742 3.176v.386h-4.541v.047c.053 1.248.75 2.039 1.822 2.039.815 0 1.366-.298 1.629-.855zm-12.282-4.682h.961v.996h.094c.316-.697.932-1.107 1.898-1.107 1.418 0 2.209.838 2.209 2.338v4.09h-1.007v-3.844c0-1.137-.481-1.676-1.489-1.676s-1.658.674-1.658 1.781v3.739h-1.008zm-2.499 3.158c0-1.5-.674-2.361-1.869-2.361-1.196 0-1.87.861-1.87 2.361 0 1.495.674 2.362 1.87 2.362 1.195 0 1.869-.867 1.869-2.362zm-4.782 0c0-2.033 1.114-3.269 2.913-3.269 1.798 0 2.912 1.236 2.912 3.269 0 2.028-1.114 3.27-2.912 3.27-1.799 0-2.913-1.242-2.913-3.27zm-6.636-5.666h1.008v3.504h.093c.317-.697.979-1.107 1.946-1.107 1.336 0 2.179.855 2.179 2.338v4.09h-1.007v-3.844c0-1.119-.504-1.676-1.459-1.676-1.131 0-1.752.715-1.752 1.781v3.739h-1.008zm-6.015 4.87h1.863c1.202 0 1.899-.645 1.899-1.764 0-1.16-.674-1.799-1.899-1.799h-1.863zm2.139-4.5c1.599 0 2.707 1.125 2.707 2.736 0 1.582-1.131 2.701-2.719 2.701h-2.127v3.018h-1.055v-8.455zm-6.114 8.454h1.008v-6.316h-1.008zm-.2-8.238c0-.386.317-.703.703-.703.387 0 .704.317.704.703 0 .387-.317.704-.704.704-.386 0-.703-.317-.703-.704z">
                                                                </path>
                                                            </svg></span><span
                                                            className="globalnav-link-text">iPhone</span></span><span
                                                        className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                            width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-iphone"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-iphone" aria-label="iPhone menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-iphone" className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-iphone"
                                            style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 476px; --r-globalnav-flyout-rate: 240ms;">
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content"
                                                    style="--r-globalnav-flyout-elevated-group-count: 1; --r-globalnav-flyout-group-total: 2; --r-globalnav-flyout-item-total: 9;">
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore iphone"
                                                        style="--r-globalnav-flyout-group-number: 0;">
                                                        <h2 className="globalnav-submenu-header" id="d836f05a"
                                                            style="--r-globalnav-flyout-item-number: 1;">Explore iPhone</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="d836f05a">
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/iphone/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore all iphone">Explore All
                                                                    iPhone</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/iphone-15-pro/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 15 pro">iPhone 15 Pro</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/iphone-15/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 15">iPhone 15</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_14"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 14">iPhone 14</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_13"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 13">iPhone 13</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/iphone-se/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone se">iPhone SE</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 8;"><a
                                                                    href="https://www.apple.com/iphone/compare/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="compare iphone">Compare iPhone</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 9;"><a
                                                                    href="https://www.apple.com/iphone/switch/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="switch from android">Switch from
                                                                    Android</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="shop iphone"
                                                        style="--r-globalnav-flyout-group-number: 1;">
                                                        <h2 className="globalnav-submenu-header" id="0881b5d1"
                                                            style="--r-globalnav-flyout-item-number: 1;">Shop iPhone</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="0881b5d1">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_iphone"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop iphone">Shop iPhone</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/us/shop/goto/iphone/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone accessories">iPhone
                                                                    Accessories</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/us/shop/goto/trade_in"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple trade in">Apple Trade In</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_iphone/carrier_offers"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="carrier deals at apple">Carrier
                                                                    Deals at Apple</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/us/shop/goto/payment_plan"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="financing">Financing</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="more from iphone"
                                                        style="--r-globalnav-flyout-group-number: 2;">
                                                        <h2 className="globalnav-submenu-header" id="87769891"
                                                            style="--r-globalnav-flyout-item-number: 1;">More from iPhone
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="87769891">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://support.apple.com/iphone?cid=gn-ols-iphone-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone support"
                                                                    data-analytics-exit-link="true">iPhone Support</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/support/products/iphone/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="applecare+ for iphone">AppleCare+
                                                                    for iPhone</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/ios/ios-17/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ios 17">iOS 17</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/apps/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apps by apple">Apps by Apple</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/privacy/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone privacy">iPhone Privacy</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/icloud/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="icloud+">iCloud+</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 8;"><a
                                                                    href="https://www.apple.com/wallet/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="wallet">Wallet, Pay, Card</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 9;"><a
                                                                    href="https://www.apple.com/siri/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="siri">Siri</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div
                                        data-analytics-element-engagement="globalnav hover - iphone"
                                        className="globalnav-item globalnav-item-iphone globalnav-item-menu globalnav-item-submenu"
                                        style={{ "--r-globalnav-flyout-item-number": "3" }}
                                    >
                                        <ul className="globalnav-submenu-trigger-group">
                                            {/* iPhone Link */}
                                            <li className="globalnav-submenu-trigger-item">
                                                <a
                                                    onMouseEnter={() => handleHoverMenuItem('iphone')}
                                                    href="https://www.apple.com/iphone/"
                                                    data-globalnav-item-name="iphone"
                                                    data-topnav-flyout-trigger-compact=""
                                                    data-analytics-title="iphone"
                                                    data-analytics-element-engagement="hover - iphone"
                                                    aria-label="iPhone"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-iphone"
                                                >
                                                    <span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                height="44" viewBox="0 0 38 44" width="38"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="m32.7129 22.3203h3.48c-.023-1.119-.691-1.857-1.693-1.857-1.008 0-1.711.738-1.787 1.857zm4.459 2.045c-.293 1.078-1.277 1.746-2.66 1.746-1.752 0-2.848-1.266-2.848-3.264 0-1.986 1.113-3.275 2.848-3.275 1.705 0 2.742 1.213 2.742 3.176v.386h-4.541v.047c.053 1.248.75 2.039 1.822 2.039.815 0 1.366-.298 1.629-.855zm-12.282-4.682h.961v.996h.094c.316-.697.932-1.107 1.898-1.107 1.418 0 2.209.838 2.209 2.338v4.09h-1.007v-3.844c0-1.137-.481-1.676-1.489-1.676s-1.658.674-1.658 1.781v3.739h-1.008zm-2.499 3.158c0-1.5-.674-2.361-1.869-2.361-1.196 0-1.87.861-1.87 2.361 0 1.495.674 2.362 1.87 2.362 1.195 0 1.869-.867 1.869-2.362zm-4.782 0c0-2.033 1.114-3.269 2.913-3.269 1.798 0 2.912 1.236 2.912 3.269 0 2.028-1.114 3.27-2.912 3.27-1.799 0-2.913-1.242-2.913-3.27zm-6.636-5.666h1.008v3.504h.093c.317-.697.979-1.107 1.946-1.107 1.336 0 2.179.855 2.179 2.338v4.09h-1.007v-3.844c0-1.119-.504-1.676-1.459-1.676-1.131 0-1.752.715-1.752 1.781v3.739h-1.008zm-6.015 4.87h1.863c1.202 0 1.899-.645 1.899-1.764 0-1.16-.674-1.799-1.899-1.799h-1.863zm2.139-4.5c1.599 0 2.707 1.125 2.707 2.736 0 1.582-1.131 2.701-2.719 2.701h-2.127v3.018h-1.055v-8.455zm-6.114 8.454h1.008v-6.316h-1.008zm-.2-8.238c0-.386.317-.703.703-.703.387 0 .704.317.704.703 0 .387-.317.704-.704.704-.386 0-.703-.317-.703-.704z">
                                                                </path>
                                                            </svg></span><span
                                                                className="globalnav-link-text">iPhone</span></span><span
                                                                    className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                                        width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span>
                                                </a>
                                            </li>
                                            {/* iPhone Menu Button */}
                                            <li className="globalnav-submenu-trigger-item">
                                                <button
                                                    id="globalnav-menubutton-link-iphone"
                                                    className="globalnav-submenu-trigger-button"
                                                    aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-iphone"
                                                    aria-label="iPhone menu"
                                                    data-topnav-flyout-trigger-regular="true"
                                                >
                                                    <span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span>
                                                </button>
                                            </li>
                                        </ul>
                                        <div
                                            id="globalnav-submenu-link-iphone"
                                            className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-iphone"
                                            style={{
                                                "--r-globalnav-flyout-item-total": "0",
                                                "--r-globalnav-flyout-group-number": "0",
                                                "--r-globalnav-flyout-height": "476px",
                                                "--r-globalnav-flyout-rate": "240ms"
                                            }}
                                        >
                                            <div className="globalnav-flyout-scroll-container">
                                                <div
                                                    className="globalnav-flyout-content globalnav-submenu-content"
                                                    style={{
                                                        "--r-globalnav-flyout-elevated-group-count": "1",
                                                        "--r-globalnav-flyout-group-total": "2",
                                                        "--r-globalnav-flyout-item-total": "9"
                                                    }}
                                                >
                                                    <div
                                                        className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore iphone"
                                                        style={{ "--r-globalnav-flyout-group-number": "0" }}
                                                    >
                                                        <h2
                                                            className="globalnav-submenu-header"
                                                            id="d836f05a"
                                                            style={{ "--r-globalnav-flyout-item-number": "1" }}
                                                        >
                                                            Explore iPhone
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="d836f05a">
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "2" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/iphone/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore all iphone"
                                                                >
                                                                    Explore All iPhone
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "3" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/iphone-15-pro/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 15 pro"
                                                                >
                                                                    iPhone 15 Pro
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "4" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/iphone-15/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 15"
                                                                >
                                                                    iPhone 15
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "5" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_14"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 14"
                                                                >
                                                                    iPhone 14
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "6" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_13"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone 13"
                                                                >
                                                                    iPhone 13
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item-elevated"
                                                                style={{ "--r-globalnav-flyout-item-number": "7" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/iphone-se/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone se"
                                                                >
                                                                    iPhone SE
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "8" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/iphone/compare/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="compare iphone"
                                                                >
                                                                    Compare iPhone
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="globalnav-submenu-list-item"
                                                                style={{ "--r-globalnav-flyout-item-number": "9" }}
                                                            >
                                                                <a
                                                                    href="https://www.apple.com/iphone/switch/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="switch from android"
                                                                >
                                                                    Switch from Android
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* Submenu Groups */}
                                                    {/* ... */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div data-analytics-element-engagement="globalnav hover - watch" className="globalnav-item globalnav-item-watch globalnav-item-menu globalnav-item-submenu" style="--r-globalnav-flyout-item-number: 4;">
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://www.apple.com/watch/" data-globalnav-item-name="watch"
                                                    data-topnav-flyout-trigger-compact="" data-analytics-title="watch"
                                                    data-analytics-element-engagement="hover - watch" aria-label="Watch"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-watch"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                height="44" viewBox="0 0 35 44" width="35"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="m28.9819 17.1758h1.008v3.504h.094c.316-.697.978-1.108 1.945-1.108 1.336 0 2.18.856 2.18 2.338v4.09h-1.008v-3.844c0-1.119-.504-1.675-1.459-1.675-1.131 0-1.752.715-1.752 1.781v3.738h-1.008zm-2.42 4.441c-.164-.627-.721-1.136-1.629-1.136-1.137 0-1.852.908-1.852 2.338 0 1.459.727 2.384 1.852 2.384.849 0 1.441-.392 1.629-1.107h1.019c-.182 1.16-1.125 2.016-2.642 2.016-1.77 0-2.901-1.284-2.901-3.293 0-1.969 1.125-3.247 2.895-3.247 1.535 0 2.472.92 2.648 2.045zm-6.533-3.568v1.635h1.407v.844h-1.407v3.574c0 .744.282 1.06.938 1.06.182 0 .281-.006.469-.023v.85c-.2.035-.393.058-.592.058-1.301 0-1.822-.48-1.822-1.687v-3.832h-1.02v-.844h1.02v-1.635zm-4.2 5.596v-.58l-1.699.111c-.961.064-1.383.398-1.383 1.031 0 .645.545 1.02 1.277 1.02 1.038 0 1.805-.68 1.805-1.582zm-4.125.586c0-1.131.832-1.782 2.303-1.869l1.822-.112v-.574c0-.779-.486-1.207-1.43-1.207-.755 0-1.283.287-1.423.785h-1.02c.135-1.014 1.131-1.682 2.479-1.682 1.541 0 2.402.792 2.402 2.104v4.324h-.961v-.931h-.094c-.41.673-1.101 1.043-1.945 1.043-1.225 0-2.133-.727-2.133-1.881zm-7.684 1.769h-.996l-2.303-8.455h1.101l1.682 6.873h.07l1.893-6.873h1.066l1.893 6.873h.07l1.682-6.873h1.101l-2.302 8.455h-.996l-1.946-6.674h-.07z">
                                                                </path>
                                                            </svg></span><span
                                                            className="globalnav-link-text">Watch</span></span><span
                                                        className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                            width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-watch"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-watch" aria-label="Watch menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-watch" className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-watch"
                                            style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 476px; --r-globalnav-flyout-rate: 240ms;">
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content"
                                                    style="--r-globalnav-flyout-elevated-group-count: 1; --r-globalnav-flyout-group-total: 2; --r-globalnav-flyout-item-total: 9;">
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore watch"
                                                        style="--r-globalnav-flyout-group-number: 0;">
                                                        <h2 className="globalnav-submenu-header" id="666abc94"
                                                            style="--r-globalnav-flyout-item-number: 1;">Explore Watch</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="666abc94">
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/watch/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore all apple watch">Explore
                                                                    All Apple Watch</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/apple-watch-series-9/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch series 9">Apple Watch
                                                                    Series 9</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/apple-watch-ultra-2/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch ultra 2">Apple Watch
                                                                    Ultra 2</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/apple-watch-se/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch se">Apple Watch SE</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/apple-watch-nike/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch nike">Apple Watch
                                                                    Nike</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/apple-watch-hermes/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch hermes">Apple Watch
                                                                    Hermès</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 8;"><a
                                                                    href="https://www.apple.com/watch/compare/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="compare watch">Compare Watch</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 9;"><a
                                                                    href="https://www.apple.com/watch/why-apple-watch/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="why apple watch">Why Apple
                                                                    Watch</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group " data-analytics-region="shop watch"
                                                        style="--r-globalnav-flyout-group-number: 1;">
                                                        <h2 className="globalnav-submenu-header" id="fc567888"
                                                            style="--r-globalnav-flyout-item-number: 1;">Shop Watch</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="fc567888">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_watch"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop apple watch">Shop Apple
                                                                    Watch</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/us/shop/goto/studio/apple_watch"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch studio">Apple Watch
                                                                    Studio</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/us/shop/goto/watch/bands"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch bands">Apple Watch
                                                                    Bands</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/us/shop/goto/watch/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple watch accessories">Apple
                                                                    Watch Accessories</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/us/shop/goto/trade_in"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple trade in">Apple Trade In</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/us/shop/goto/payment_plan"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="financing">Financing</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="more from watch"
                                                        style="--r-globalnav-flyout-group-number: 2;">
                                                        <h2 className="globalnav-submenu-header" id="05ba1ff0"
                                                            style="--r-globalnav-flyout-item-number: 1;">More from Watch
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="05ba1ff0">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://support.apple.com/watch?cid=gn-ols-watch-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-exit-link="true"
                                                                    data-analytics-title="apple watch support">Apple Watch
                                                                    Support</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/support/products/watch/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="applecare+ for apple watch">AppleCare+</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/watchos/watchos-10/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="watchos 10">watchOS 10</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/apps/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apps by apple">Apps by Apple</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/apple-fitness-plus/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple fitness+">Apple Fitness+</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-analytics-element-engagement="globalnav hover - vision" className="globalnav-item globalnav-item-vision globalnav-item-menu" style="--r-globalnav-flyout-item-number: 5;">
                                        <ul role="none" className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://www.apple.com/apple-vision-pro/"
                                                    data-globalnav-item-name="vision" data-topnav-flyout-trigger-compact=""
                                                    data-analytics-title="vision"
                                                    data-analytics-element-engagement="hover - vision" aria-label="Vision"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-vision"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="34" height="44"
                                                                viewBox="0 0 34 44">
                                                                <g id="en-US_globalnav_links_vision_image_large">
                                                                    <rect id="box_" width="34" height="44" fill="none">
                                                                    </rect>
                                                                    <path id="art_"
                                                                        d="m.4043,17.5449h1.1074l2.4844,7.0898h.0938l2.4844-7.0898h1.1074l-3.1172,8.4551h-1.043L.4043,17.5449Zm8.3467.2168c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031Zm.1875,1.9219h1.0195v6.3164h-1.0195v-6.3164Zm2.499,4.7051h1.043c.1699.5273.6738.873,1.4824.873.8496,0,1.4531-.4043,1.4531-.9785v-.0117c0-.4277-.3223-.7266-1.1016-.9141l-.9785-.2344c-1.1836-.2812-1.7168-.7969-1.7168-1.7051v-.0059c0-1.0488,1.0078-1.8398,2.3496-1.8398,1.3242,0,2.2441.6621,2.3848,1.6934h-1.002c-.1348-.498-.627-.8438-1.3887-.8438-.75,0-1.3008.3867-1.3008.9434v.0117c0,.4277.3164.6973,1.0605.8789l.9727.2344c1.1895.2871,1.7637.8027,1.7637,1.7051v.0117c0,1.125-1.0957,1.9043-2.5312,1.9043-1.4062,0-2.373-.6797-2.4902-1.7227Zm6.3203-6.627c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031Zm.1875,1.9219h1.0195v6.3164h-1.0195v-6.3164Zm2.5049,3.1641v-.0117c0-2.0273,1.1133-3.2637,2.9121-3.2637s2.9121,1.2363,2.9121,3.2637v.0117c0,2.0215-1.1133,3.2637-2.9121,3.2637s-2.9121-1.2422-2.9121-3.2637Zm4.7812,0v-.0117c0-1.4941-.6738-2.3613-1.8691-2.3613s-1.8691.8672-1.8691,2.3613v.0117c0,1.4883.6738,2.3613,1.8691,2.3613s1.8691-.873,1.8691-2.3613Zm2.5049-3.1641h1.0195v.9492h.0938c.3164-.668.9082-1.0605,1.8398-1.0605,1.418,0,2.209.8379,2.209,2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465,1.7871v3.7383h-1.0195v-6.3164Z">
                                                                    </path>
                                                                </g>
                                                            </svg></span><span
                                                            className="globalnav-link-text">Vision</span></span></a></li>
                                        </ul>
                                    </div>
                                    <div data-analytics-element-engagement="globalnav hover - airpods" className="globalnav-item globalnav-item-airpods globalnav-item-menu globalnav-item-submenu" style="--r-globalnav-flyout-item-number: 6;">
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://www.apple.com/airpods/" data-globalnav-item-name="airpods"
                                                    data-topnav-flyout-trigger-compact="" data-analytics-title="airpods"
                                                    data-analytics-element-engagement="hover - airpods" aria-label="AirPods"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-airpods"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                height="44" viewBox="0 0 43 44" width="43"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="m11.7153 19.6836h.961v.937h.094c.187-.615.914-1.048 1.752-1.048.164 0 .375.011.504.029v1.008c-.082-.024-.446-.059-.645-.059-.961 0-1.658.645-1.658 1.535v3.914h-1.008zm28.135-.111c1.324 0 2.244.656 2.379 1.693h-.996c-.135-.504-.627-.838-1.389-.838-.75 0-1.336.381-1.336.943 0 .434.352.704 1.096.885l.973.235c1.189.287 1.763.802 1.763 1.711 0 1.13-1.095 1.91-2.531 1.91-1.406 0-2.373-.674-2.484-1.723h1.037c.17.533.674.873 1.482.873.85 0 1.459-.404 1.459-.984 0-.434-.328-.727-1.002-.891l-1.084-.264c-1.183-.287-1.722-.796-1.722-1.71 0-1.049 1.013-1.84 2.355-1.84zm-6.665 5.631c-1.155 0-1.846-.885-1.846-2.362 0-1.471.697-2.361 1.846-2.361 1.142 0 1.857.914 1.857 2.361 0 1.459-.709 2.362-1.857 2.362zm1.834-8.028v3.504h-.088c-.358-.691-1.102-1.107-1.981-1.107-1.605 0-2.654 1.289-2.654 3.269 0 1.987 1.037 3.27 2.654 3.27.873 0 1.623-.416 2.022-1.119h.094v1.007h.961v-8.824zm-9.001 8.028c-1.195 0-1.869-.868-1.869-2.362 0-1.5.674-2.361 1.869-2.361 1.196 0 1.869.861 1.869 2.361 0 1.494-.673 2.362-1.869 2.362zm0-5.631c-1.799 0-2.912 1.236-2.912 3.269 0 2.028 1.113 3.27 2.912 3.27s2.912-1.242 2.912-3.27c0-2.033-1.113-3.269-2.912-3.269zm-17.071 6.427h1.008v-6.316h-1.008zm-.199-8.238c0-.387.317-.703.703-.703.387 0 .703.316.703.703s-.316.703-.703.703c-.386 0-.703-.316-.703-.703zm-6.137 4.922 1.324-3.773h.093l1.325 3.773zm1.892-5.139h-1.043l-3.117 8.455h1.107l.85-2.42h3.363l.85 2.42h1.107zm14.868 4.5h-1.864v-3.562h1.864c1.224 0 1.898.639 1.898 1.799 0 1.119-.697 1.763-1.898 1.763zm.275-4.5h-3.193v8.455h1.054v-3.017h2.127c1.588 0 2.719-1.119 2.719-2.701 0-1.612-1.107-2.737-2.707-2.737z">
                                                                </path>
                                                            </svg></span><span
                                                            className="globalnav-link-text">AirPods</span></span><span
                                                        className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                            width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-airpods"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-airpods" aria-label="AirPods menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-airpods" className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-airpods"
                                            style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 414px; --r-globalnav-flyout-rate: 240ms;">
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content"
                                                    style="--r-globalnav-flyout-elevated-group-count: 1; --r-globalnav-flyout-group-total: 2; --r-globalnav-flyout-item-total: 7;">
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore airpods"
                                                        style="--r-globalnav-flyout-group-number: 0;">
                                                        <h2 className="globalnav-submenu-header" id="9f37924e"
                                                            style="--r-globalnav-flyout-item-number: 1;">Explore AirPods
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="9f37924e">
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/airpods/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore all airpods">Explore All
                                                                    AirPods</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/airpods-pro/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods pro 2nd generation">AirPods
                                                                    Pro 2nd generation</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/airpods-2nd-generation/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods 2nd generation">AirPods
                                                                    2nd generation</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/airpods-3rd-generation/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods 3rd generation">AirPods
                                                                    3rd generation</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/airpods-max/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods max">AirPods Max</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/airpods/compare/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="compare airpods">Compare
                                                                    AirPods</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="shop airpods"
                                                        style="--r-globalnav-flyout-group-number: 1;">
                                                        <h2 className="globalnav-submenu-header" id="b0d7f105"
                                                            style="--r-globalnav-flyout-item-number: 1;">Shop AirPods</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="b0d7f105">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/us/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2B3214%2B45aa%2B45ab&amp;f=apple-overear-sport&amp;page=1"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop airpods">Shop AirPods</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/us/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2Be62115&amp;f=headphoneacc&amp;page=1"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods accessories">AirPods
                                                                    Accessories</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="more from airpods"
                                                        style="--r-globalnav-flyout-group-number: 2;">
                                                        <h2 className="globalnav-submenu-header" id="d5e73a41"
                                                            style="--r-globalnav-flyout-item-number: 1;">More from AirPods
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="d5e73a41">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://support.apple.com/airpods?cid=gn-ols-airpods-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods support"
                                                                    data-analytics-exit-link="true">AirPods Support</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/support/products/headphones/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="applecare+ for headphones">AppleCare+
                                                                    for Headphones</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/apple-music/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple music">Apple Music</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-analytics-element-engagement="globalnav hover - tv-home" className="globalnav-item globalnav-item-tv-home globalnav-item-menu globalnav-item-submenu" style="--r-globalnav-flyout-item-number: 7;">
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://www.apple.com/tv-home/" data-globalnav-item-name="tv-home"
                                                    data-topnav-flyout-trigger-compact=""
                                                    data-analytics-title="tv &amp; home"
                                                    data-analytics-element-engagement="hover - tv &amp; home"
                                                    aria-label="TV and Home"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-tv-home"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                height="44" viewBox="0 0 65 44" width="65"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="m4.3755 26v-7.5059h-2.7246v-.9492h6.5039v.9492h-2.7246v7.5059zm7.7314 0-3.1172-8.4551h1.1074l2.4844 7.0898h.0938l2.4844-7.0898h1.1074l-3.1172 8.4551zm13.981-.8438c-.7207.6328-1.7109 1.002-2.7363 1.002-1.6816 0-2.8594-.9961-2.8594-2.4141 0-1.002.5449-1.7637 1.6758-2.3613.0762-.0352.2344-.1172.3281-.1641-.7793-.8203-1.0605-1.3652-1.0605-1.9805 0-1.084.9199-1.8926 2.1562-1.8926 1.248 0 2.1562.7969 2.1562 1.9043 0 .8672-.5215 1.5-1.8281 2.1855l2.1152 2.2734c.2637-.5273.3984-1.2188.3984-2.2734v-.1465h.9844v.1523c0 1.3125-.2344 2.2676-.6973 2.9824l1.4708 1.5764h-1.3242zm-4.541-1.4824c0 .9492.7676 1.5938 1.8984 1.5938.7676 0 1.5586-.3047 2.0215-.791l-2.3906-2.6133c-.0645.0234-.2168.0996-.2988.1406-.8145.4219-1.2305 1.0078-1.2305 1.6699zm3.2109-4.3886c0-.6562-.4746-1.1016-1.1602-1.1016-.6738 0-1.1543.457-1.1543 1.1133 0 .4688.2402.8789.9082 1.541 1.0313-.5274 1.4063-.9492 1.4063-1.5527zm13.5176 6.7148v-3.8496h-4.6406v3.8496h-1.0547v-8.4551h1.0547v3.6562h4.6406v-3.6562h1.0547v8.4551zm2.6455-3.1582c0-2.0332 1.1133-3.2695 2.9121-3.2695s2.9121 1.2363 2.9121 3.2695c0 2.0273-1.1133 3.2695-2.9121 3.2695s-2.9121-1.2422-2.9121-3.2695zm4.7812 0c0-1.5-.6738-2.3613-1.8691-2.3613s-1.8691.8613-1.8691 2.3613c0 1.4941.6738 2.3613 1.8691 2.3613s1.8691-.8672 1.8691-2.3613zm2.5054-3.1582h.9609v.9961h.0938c.2871-.7031.9199-1.1074 1.7637-1.1074.8555 0 1.4531.4512 1.7461 1.1074h.0938c.3398-.668 1.0605-1.1074 1.9336-1.1074 1.2891 0 2.0098.7383 2.0098 2.0625v4.3652h-1.0078v-4.1309c0-.9316-.4395-1.3887-1.3301-1.3887-.8789 0-1.4648.6562-1.4648 1.459v4.0606h-1.0078v-4.2891c0-.75-.5215-1.2305-1.3184-1.2305-.8262 0-1.4648.7148-1.4648 1.6055v3.9141h-1.0078v-6.3164zm15.5127 4.6816c-.293 1.0781-1.2773 1.7461-2.6602 1.7461-1.752 0-2.8477-1.2656-2.8477-3.2637 0-1.9863 1.1133-3.2754 2.8477-3.2754 1.7051 0 2.7422 1.2129 2.7422 3.1758v.3867h-4.541v.0469c.0527 1.248.75 2.0391 1.8223 2.0391.8145 0 1.3652-.2988 1.6289-.8555zm-4.459-2.0449h3.4805c-.0234-1.1191-.6914-1.8574-1.6934-1.8574-1.0078 0-1.7109.7383-1.7871 1.8574z">
                                                                </path>
                                                            </svg></span><span className="globalnav-link-text">TV &amp;
                                                            Home</span></span><span className="globalnav-link-chevron"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-tv-home"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-tv-home"
                                                    aria-label="TV and Home menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-tv-home" className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-tv-home"
                                            style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 406px; --r-globalnav-flyout-rate: 240ms;">
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content"
                                                    style="--r-globalnav-flyout-elevated-group-count: 1; --r-globalnav-flyout-group-total: 2; --r-globalnav-flyout-item-total: 5;">
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore tv &amp; home"
                                                        style="--r-globalnav-flyout-group-number: 0;">
                                                        <h2 className="globalnav-submenu-header" id="97277bad"
                                                            style="--r-globalnav-flyout-item-number: 1;">Explore TV &amp;
                                                            Home</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="97277bad">
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/tv-home/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore tv &amp; home">Explore TV
                                                                    &amp; Home</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/apple-tv-4k/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple tv 4k">Apple TV 4K</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/homepod-2nd-generation/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="homepod">HomePod</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/homepod-mini/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="homepod mini">HomePod mini</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="shop tv &amp; home"
                                                        style="--r-globalnav-flyout-group-number: 1;">
                                                        <h2 className="globalnav-submenu-header" id="46717a61"
                                                            style="--r-globalnav-flyout-item-number: 1;">Shop TV &amp; Home
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="46717a61">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_tv/apple_tv_4k"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop apple tv">Shop Apple TV
                                                                    4K</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_homepod/homepod"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop homepod">Shop HomePod</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_homepod/homepod_mini"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop homepod mini">Shop HomePod
                                                                    mini</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/us/shop/goto/product/MNC73"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop siri remote">Shop Siri
                                                                    Remote</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/us/shop/goto/smart_home/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="tv &amp; home accessories">TV
                                                                    &amp; Home Accessories</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="more from tv &amp; home"
                                                        style="--r-globalnav-flyout-group-number: 2;">
                                                        <h2 className="globalnav-submenu-header" id="c9b2eed3"
                                                            style="--r-globalnav-flyout-item-number: 1;">More from TV &amp;
                                                            Home</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="c9b2eed3">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://support.apple.com/apple-tv?cid=gn-ols-appletv-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple tv support"
                                                                    data-analytics-exit-link="true">Apple TV Support</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://support.apple.com/homepod?cid=gn-ols-homepod-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="homepod support"
                                                                    data-analytics-exit-link="true">HomePod Support</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/support/products/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="applecare+">AppleCare+</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/apple-tv-app/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple tv app">Apple TV app</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/apple-tv-plus/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple tv+">Apple TV+</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/home-app/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="home app">Home app</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 8;"><a
                                                                    href="https://www.apple.com/apple-music/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple music">Apple Music</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 9;"><a
                                                                    href="https://www.apple.com/siri/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="siri">Siri</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 10;"><a
                                                                    href="https://www.apple.com/airplay/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airplay">AirPlay</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-analytics-element-engagement="globalnav hover - entertainment" className="globalnav-item globalnav-item-entertainment globalnav-item-menu globalnav-item-submenu" style="--r-globalnav-flyout-item-number: 8;">
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://www.apple.com/entertainment/"
                                                    data-globalnav-item-name="entertainment"
                                                    data-topnav-flyout-trigger-compact=""
                                                    data-analytics-title="entertainment"
                                                    data-analytics-element-engagement="hover - entertainment"
                                                    aria-label="Entertainment"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-entertainment"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 44"
                                                                width="77" height="44">
                                                                <path
                                                                    d="m0 17.4863h5.2383v.9492h-4.1836v2.7129h3.9668v.9375h-3.9668v2.9062h4.1836v.9492h-5.2383zm6.8994 2.1387h1.0195v.9492h.0938c.3164-.668.9082-1.0605 1.8398-1.0605 1.418 0 2.209.8379 2.209 2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465 1.7871v3.7383h-1.0195zm7.2803 4.6758v-3.832h-.9961v-.8438h.9961v-1.6348h1.0547v1.6348h1.3828v.8438h-1.3828v3.5742c0 .7441.2578 1.043.9141 1.043.1816 0 .2812-.0059.4688-.0234v.8672c-.1992.0352-.3926.0586-.5918.0586-1.3009-.0001-1.8458-.4806-1.8458-1.6876zm3.4365-1.4942v-.0059c0-1.9512 1.1133-3.2871 2.8301-3.2871s2.7598 1.2773 2.7598 3.1641v.3984h-4.5469c.0293 1.3066.75 2.0684 1.875 2.0684.8555 0 1.3828-.4043 1.5527-.7852l.0234-.0527h1.0195l-.0117.0469c-.2168.8555-1.1191 1.6992-2.6074 1.6992-1.8046 0-2.8945-1.2656-2.8945-3.2461zm1.0606-.5449h3.4922c-.1055-1.248-.7969-1.8398-1.7285-1.8398-.9376 0-1.6524.6386-1.7637 1.8398zm5.9912-2.6367h1.0195v.9375h.0938c.2402-.6621.832-1.0488 1.6875-1.0488.1934 0 .4102.0234.5098.041v.9902c-.2109-.0352-.4043-.0586-.627-.0586-.9727 0-1.6641.6152-1.6641 1.541v3.9141h-1.0195zm4.9658 4.6758v-3.832h-.9961v-.8438h.9961v-1.6348h1.0547v1.6348h1.3828v.8438h-1.3828v3.5742c0 .7441.2578 1.043.9141 1.043.1816 0 .2812-.0059.4688-.0234v.8672c-.1992.0352-.3926.0586-.5918.0586-1.3009-.0001-1.8458-.4806-1.8458-1.6876zm3.4658-.1231v-.0117c0-1.125.832-1.7754 2.3027-1.8633l1.8105-.1113v-.5742c0-.7793-.4746-1.2012-1.418-1.2012-.7559 0-1.2539.2812-1.418.7734l-.0059.0176h-1.0195l.0059-.0352c.1641-.9902 1.125-1.6582 2.4727-1.6582 1.541 0 2.4023.791 2.4023 2.1035v4.3242h-1.0195v-.9316h-.0938c-.3984.6738-1.0605 1.043-1.9102 1.043-1.201 0-2.1092-.7265-2.1092-1.875zm2.3203.9903c1.0371 0 1.793-.6797 1.793-1.582v-.5742l-1.6875.1055c-.9609.0586-1.3828.3984-1.3828 1.0254v.0117c0 .6386.5449 1.0136 1.2773 1.0136zm4.3926-7.4649c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031zm.1875 1.9219h1.0195v6.3164h-1.0195zm2.8213 0h1.0195v.9492h.0938c.3164-.668.9082-1.0605 1.8398-1.0605 1.418 0 2.209.8379 2.209 2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465 1.7871v3.7383h-1.0195zm6.8818 0h1.0195v.9609h.0938c.2812-.6797.8789-1.0723 1.7051-1.0723.8555 0 1.4531.4512 1.7461 1.1074h.0938c.3398-.668 1.0605-1.1074 1.9336-1.1074 1.2891 0 2.0098.7383 2.0098 2.0625v4.3652h-1.0195v-4.1309c0-.9316-.4277-1.3945-1.3184-1.3945-.8789 0-1.459.6621-1.459 1.4648v4.0605h-1.0195v-4.2891c0-.75-.5156-1.2363-1.3125-1.2363-.8262 0-1.4531.7207-1.4531 1.6113v3.9141h-1.0195v-6.3162zm10.0049 3.1816v-.0059c0-1.9512 1.1133-3.2871 2.8301-3.2871s2.7598 1.2773 2.7598 3.1641v.3984h-4.5469c.0293 1.3066.75 2.0684 1.875 2.0684.8555 0 1.3828-.4043 1.5527-.7852l.0234-.0527h1.0195l-.0116.0469c-.2168.8555-1.1191 1.6992-2.6074 1.6992-1.8047 0-2.8946-1.2656-2.8946-3.2461zm1.0606-.5449h3.4922c-.1055-1.248-.7969-1.8398-1.7285-1.8398-.9376 0-1.6524.6386-1.7637 1.8398zm5.9912-2.6367h1.0195v.9492h.0938c.3164-.668.9082-1.0605 1.8398-1.0605 1.418 0 2.209.8379 2.209 2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465 1.7871v3.7383h-1.0195zm7.2802 4.6758v-3.832h-.9961v-.8438h.9961v-1.6348h1.0547v1.6348h1.3828v.8438h-1.3828v3.5742c0 .7441.2578 1.043.9141 1.043.1816 0 .2812-.0059.4688-.0234v.8672c-.1992.0352-.3926.0586-.5918.0586-1.3008-.0001-1.8458-.4806-1.8458-1.6876z">
                                                                </path>
                                                            </svg></span><span
                                                            className="globalnav-link-text">Entertainment</span></span><span
                                                        className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                            width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-entertainment"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-entertainment"
                                                    aria-label="Entertainment menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-entertainment"
                                            className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-entertainment"
                                            style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 566px; --r-globalnav-flyout-rate: 261ms;">
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content"
                                                    style="--r-globalnav-flyout-elevated-group-count: 1; --r-globalnav-flyout-group-total: 1; --r-globalnav-flyout-item-total: 11;">
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore entertainment"
                                                        style="--r-globalnav-flyout-group-number: 0;">
                                                        <h2 className="globalnav-submenu-header" id="186ff7b2"
                                                            style="--r-globalnav-flyout-item-number: 1;">Explore
                                                            Entertainment</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="186ff7b2">
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/services/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore entertainment">Explore
                                                                    Entertainment</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/apple-one/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple one">Apple One</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/apple-tv-plus/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple tv+">Apple TV+</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/apple-music/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple music">Apple Music</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/apple-arcade/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple arcade">Apple Arcade</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/apple-fitness-plus/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple fitness+">Apple Fitness+</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 8;"><a
                                                                    href="https://www.apple.com/apple-news/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple news+">Apple News+</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 9;"><a
                                                                    href="https://www.apple.com/apple-podcasts/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple podcasts">Apple Podcasts</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 10;"><a
                                                                    href="https://www.apple.com/apple-books/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple books">Apple Books</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 11;"><a
                                                                    href="https://www.apple.com/app-store/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="app store">App Store</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="support - entertainment"
                                                        style="--r-globalnav-flyout-group-number: 1;">
                                                        <h2 className="globalnav-submenu-header" id="275f0680"
                                                            style="--r-globalnav-flyout-item-number: 1;">Support</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="275f0680">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://support.apple.com/tv?cid=gn-ols-tvplus-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple tv+ support"
                                                                    data-analytics-exit-link="true">Apple TV+ Support</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://support.apple.com/music?cid=gn-ols-music-psp-prodfly"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple music support"
                                                                    data-analytics-exit-link="true">Apple Music Support</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-analytics-element-engagement="globalnav hover - accessories" className="globalnav-item globalnav-item-accessories globalnav-item-menu globalnav-item-submenu" style="--r-globalnav-flyout-item-number: 9;">
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://www.apple.com/us/shop/goto/buy_accessories"
                                                    data-globalnav-item-name="accessories"
                                                    data-topnav-flyout-trigger-compact="" data-analytics-title="accessories"
                                                    data-analytics-element-engagement="hover - accessories"
                                                    aria-label="Accessories"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-accessories"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                height="44" viewBox="0 0 67 44" width="67"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="m5.6603 23.5715h-3.3633l-.8496 2.4199h-1.1074l3.1172-8.4551h1.043l3.1172 8.4551h-1.1075zm-3.0527-.8965h2.7422l-1.3242-3.7734h-.0938zm10.0986-1.0664c-.1641-.627-.7207-1.1367-1.6289-1.1367-1.1367 0-1.8516.9082-1.8516 2.3379 0 1.459.7266 2.3848 1.8516 2.3848.8496 0 1.4414-.3926 1.6289-1.1074h1.0195c-.1816 1.1602-1.125 2.0156-2.6426 2.0156-1.7695 0-2.9004-1.2832-2.9004-3.293 0-1.9688 1.125-3.2461 2.8945-3.2461 1.5352 0 2.4727.9199 2.6484 2.0449zm6.5947 0c-.1641-.627-.7207-1.1367-1.6289-1.1367-1.1367 0-1.8516.9082-1.8516 2.3379 0 1.459.7266 2.3848 1.8516 2.3848.8496 0 1.4414-.3926 1.6289-1.1074h1.0195c-.1816 1.1602-1.125 2.0156-2.6426 2.0156-1.7695 0-2.9004-1.2832-2.9004-3.293 0-1.9688 1.125-3.2461 2.8945-3.2461 1.5352 0 2.4727.9199 2.6484 2.0449zm7.5796 2.748c-.293 1.0781-1.2773 1.7461-2.6602 1.7461-1.752 0-2.8477-1.2656-2.8477-3.2637 0-1.9863 1.1133-3.2754 2.8477-3.2754 1.7051 0 2.7422 1.2129 2.7422 3.1758v.3867h-4.541v.0469c.0527 1.248.75 2.0391 1.8223 2.0391.8145 0 1.3652-.2988 1.6289-.8555zm-4.459-2.0449h3.4805c-.0234-1.1191-.6914-1.8574-1.6934-1.8574-1.0078 0-1.7109.7383-1.7871 1.8574zm8.212-2.748c1.3242 0 2.2441.6562 2.3789 1.6934h-.9961c-.1348-.5039-.627-.8379-1.3887-.8379-.75 0-1.3359.3809-1.3359.9434 0 .4336.3516.7031 1.0957.8848l.9727.2344c1.1895.2871 1.7637.8027 1.7637 1.7109 0 1.1309-1.0957 1.9102-2.5312 1.9102-1.4062 0-2.373-.6738-2.4844-1.7227h1.0371c.1699.5332.6738.873 1.4824.873.8496 0 1.459-.4043 1.459-.9844 0-.4336-.3281-.7266-1.002-.8906l-1.084-.2637c-1.1836-.2871-1.7227-.7969-1.7227-1.7109 0-1.0489 1.0137-1.8399 2.3555-1.8399zm6.0439 0c1.3242 0 2.2441.6562 2.3789 1.6934h-.9961c-.1348-.5039-.627-.8379-1.3887-.8379-.75 0-1.3359.3809-1.3359.9434 0 .4336.3516.7031 1.0957.8848l.9727.2344c1.1895.2871 1.7637.8027 1.7637 1.7109 0 1.1309-1.0957 1.9102-2.5312 1.9102-1.4062 0-2.373-.6738-2.4844-1.7227h1.0371c.1699.5332.6738.873 1.4824.873.8496 0 1.459-.4043 1.459-.9844 0-.4336-.3281-.7266-1.002-.8906l-1.084-.2637c-1.1836-.2871-1.7227-.7969-1.7227-1.7109 0-1.0489 1.0137-1.8399 2.3555-1.8399zm3.6357 3.2695c0-2.0332 1.1133-3.2695 2.9121-3.2695s2.9121 1.2363 2.9121 3.2695c0 2.0273-1.1133 3.2695-2.9121 3.2695s-2.9121-1.2422-2.9121-3.2695zm4.7813 0c0-1.5-.6738-2.3613-1.8691-2.3613s-1.8691.8613-1.8691 2.3613c0 1.4941.6738 2.3613 1.8691 2.3613s1.8691-.8672 1.8691-2.3613zm2.5054-3.1582h.9609v.9375h.0938c.1875-.6152.9141-1.0488 1.752-1.0488.1641 0 .375.0117.5039.0293v1.0078c-.082-.0234-.4453-.0586-.6445-.0586-.9609 0-1.6582.6445-1.6582 1.5352v3.9141h-1.0078v-6.3165zm4.2744-1.9219c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031zm.1992 1.9219h1.0078v6.3164h-1.0078zm8.001 4.6816c-.293 1.0781-1.2773 1.7461-2.6602 1.7461-1.752 0-2.8477-1.2656-2.8477-3.2637 0-1.9863 1.1133-3.2754 2.8477-3.2754 1.7051 0 2.7422 1.2129 2.7422 3.1758v.3867h-4.541v.0469c.0527 1.248.75 2.0391 1.8223 2.0391.8145 0 1.3652-.2988 1.6289-.8555zm-4.459-2.0449h3.4805c-.0234-1.1191-.6914-1.8574-1.6934-1.8574-1.0078 0-1.7109.7383-1.7871 1.8574zm8.2119-2.748c1.3242 0 2.2441.6562 2.3789 1.6934h-.9961c-.1348-.5039-.627-.8379-1.3887-.8379-.75 0-1.3359.3809-1.3359.9434 0 .4336.3516.7031 1.0957.8848l.9727.2344c1.1895.2871 1.7637.8027 1.7637 1.7109 0 1.1309-1.0957 1.9102-2.5312 1.9102-1.4062 0-2.373-.6738-2.4844-1.7227h1.0371c.1699.5332.6738.873 1.4824.873.8496 0 1.459-.4043 1.459-.9844 0-.4336-.3281-.7266-1.002-.8906l-1.084-.2637c-1.1836-.2871-1.7227-.7969-1.7227-1.7109 0-1.0489 1.0137-1.8399 2.3555-1.8399z">
                                                                </path>
                                                            </svg></span><span
                                                            className="globalnav-link-text">Accessories</span></span><span
                                                        className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                            width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-accessories"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-accessories"
                                                    aria-label="Accessories menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-accessories"
                                            className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-accessories"
                                            style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 452px; --r-globalnav-flyout-rate: 240ms;">
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content"
                                                    style="--r-globalnav-flyout-elevated-group-count: 1; --r-globalnav-flyout-group-total: 1; --r-globalnav-flyout-item-total: 8;">
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="shop accessories"
                                                        style="--r-globalnav-flyout-group-number: 0;">
                                                        <h2 className="globalnav-submenu-header" id="3de481ed"
                                                            style="--r-globalnav-flyout-item-number: 1;">Shop Accessories
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="3de481ed">
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/us/shop/goto/buy_accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="shop all accessories">Shop All
                                                                    Accessories</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/us/shop/goto/mac/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac accessories">Mac</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/us/shop/goto/ipad/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ipad accessories">iPad</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://www.apple.com/us/shop/goto/iphone/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone accessories">iPhone</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://www.apple.com/us/shop/goto/watch/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="watch accessories">Apple Watch</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://www.apple.com/us/shop/goto/accessories/all_accessories/headphones_speakers?fh=47d1%2B3214%2B45aa%2B45ab&amp;f=apple-overear-sport&amp;page=1"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods">AirPods</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 8;"><a
                                                                    href="https://www.apple.com/us/shop/goto/smart_home/accessories"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="tv &amp; home accessories">TV
                                                                    &amp; Home</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="explore accessories"
                                                        style="--r-globalnav-flyout-group-number: 1;">
                                                        <h2 className="globalnav-submenu-header" id="696ed4ea"
                                                            style="--r-globalnav-flyout-item-number: 1;">Explore Accessories
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="696ed4ea">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/us/shop/goto/accessories/all_accessories/made_by_apple"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="made by apple">Made by Apple</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://www.apple.com/us/shop/goto/accessories/all_accessories/beats_featured"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="beats by dre">Beats by Dr. Dre</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://www.apple.com/airtag/"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airtag">AirTag</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-analytics-element-engagement="globalnav hover - support" className="globalnav-item globalnav-item-support globalnav-item-menu globalnav-item-submenu" style="--r-globalnav-flyout-item-number: 10;">
                                        <ul className="globalnav-submenu-trigger-group">
                                            <li className="globalnav-submenu-trigger-item"><a
                                                    href="https://support.apple.com/?cid=gn-ols-home-hp-tab"
                                                    data-globalnav-item-name="support" data-topnav-flyout-trigger-compact=""
                                                    data-analytics-title="support"
                                                    data-analytics-element-engagement="hover - support"
                                                    data-analytics-exit-link="true" aria-label="Support"
                                                    className="globalnav-link globalnav-submenu-trigger-link globalnav-link-support"><span
                                                        className="globalnav-link-text-container"><span
                                                            className="globalnav-image-regular globalnav-link-image"><svg
                                                                height="44" viewBox="0 0 44 44" width="44"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="m42.1206 18.0337v1.635h1.406v.844h-1.406v3.574c0 .744.281 1.06.937 1.06.182 0 .282-.006.469-.023v.849c-.199.036-.392.059-.592.059-1.3 0-1.822-.48-1.822-1.687v-3.832h-1.019v-.844h1.019v-1.635zm-6.131 1.635h.961v.937h.093c.188-.615.914-1.049 1.752-1.049.164 0 .375.012.504.03v1.008c-.082-.024-.445-.059-.644-.059-.961 0-1.659.644-1.659 1.535v3.914h-1.007zm-2.463 3.158c0-1.5-.674-2.361-1.869-2.361s-1.869.861-1.869 2.361c0 1.494.674 2.361 1.869 2.361s1.869-.867 1.869-2.361zm-4.781 0c0-2.033 1.113-3.27 2.912-3.27s2.912 1.237 2.912 3.27c0 2.027-1.113 3.27-2.912 3.27s-2.912-1.243-2.912-3.27zm-2.108 0c0-1.477-.692-2.361-1.846-2.361-1.143 0-1.863.908-1.863 2.361 0 1.447.72 2.361 1.857 2.361 1.16 0 1.852-.884 1.852-2.361zm1.043 0c0 1.975-1.049 3.27-2.655 3.27-.902 0-1.629-.393-1.974-1.061h-.094v3.059h-1.008v-8.426h.961v1.054h.094c.404-.726 1.16-1.166 2.021-1.166 1.612 0 2.655 1.284 2.655 3.27zm-8.048 0c0-1.477-.691-2.361-1.845-2.361-1.143 0-1.864.908-1.864 2.361 0 1.447.721 2.361 1.858 2.361 1.16 0 1.851-.884 1.851-2.361zm1.043 0c0 1.975-1.049 3.27-2.654 3.27-.902 0-1.629-.393-1.975-1.061h-.093v3.059h-1.008v-8.426h.961v1.054h.093c.405-.726 1.161-1.166 2.022-1.166 1.611 0 2.654 1.284 2.654 3.27zm-7.645 3.158h-.961v-.99h-.094c-.316.703-.99 1.102-1.957 1.102-1.418 0-2.156-.844-2.156-2.338v-4.09h1.008v3.844c0 1.136.422 1.664 1.43 1.664 1.113 0 1.722-.663 1.722-1.77v-3.738h1.008zm-11.69-2.209c.129.885.972 1.447 2.174 1.447 1.136 0 1.974-.615 1.974-1.453 0-.72-.527-1.177-1.693-1.47l-1.084-.282c-1.529-.386-2.192-1.078-2.192-2.279 0-1.435 1.202-2.408 2.989-2.408 1.634 0 2.853.973 2.941 2.338h-1.06c-.147-.867-.862-1.383-1.916-1.383-1.125 0-1.87.562-1.87 1.418 0 .662.463 1.043 1.629 1.342l.885.234c1.752.44 2.455 1.119 2.455 2.361 0 1.553-1.224 2.543-3.158 2.543-1.793 0-3.029-.949-3.141-2.408z">
                                                                </path>
                                                            </svg></span><span
                                                            className="globalnav-link-text">Support</span></span><span
                                                        className="globalnav-link-chevron"><svg height="48" viewBox="0 0 9 48"
                                                            width="9" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z">
                                                            </path>
                                                        </svg></span></a></li>
                                            <li className="globalnav-submenu-trigger-item"><button
                                                    id="globalnav-menubutton-link-support"
                                                    className="globalnav-submenu-trigger-button" aria-expanded="false"
                                                    aria-controls="globalnav-submenu-link-support" aria-label="Support menu"
                                                    data-topnav-flyout-trigger-regular="true"><span
                                                        className="globalnav-image-regular globalnav-submenu-button-icon"><svg
                                                            height="10" viewBox="0 0 10 10" width="10"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m4.6725 6.635-2.655-2.667a.445.445 0 0 1 -.123-.304.4331.4331 0 0 1 .427-.439h.006a.447.447 0 0 1 .316.135l2.357 2.365 2.356-2.365a.458.458 0 0 1 .316-.135.433.433 0 0 1 .433.433v.006a.4189.4189 0 0 1 -.123.3l-2.655 2.671a.4451.4451 0 0 1 -.327.14.464.464 0 0 1 -.328-.14z">
                                                            </path>
                                                        </svg></span><span
                                                        className="globalnav-image-compact globalnav-submenu-button-icon"><svg
                                                            height="48" viewBox="0 0 9 48" width="9"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m7.4382 24.0621-6.5581-6.4238c-.2368-.2319-.2407-.6118-.0088-.8486.2324-.2373.6123-.2407.8486-.0088l7 6.8569c.1157.1138.1807.2695.1802.4316-.001.1621-.0674.3174-.1846.4297l-7 6.7242c-.1162.1118-.2661.1675-.4155.1675-.1577 0-.3149-.062-.4326-.1846-.2295-.2388-.2222-.6187.0171-.8481l6.5537-6.2959z">
                                                            </path>
                                                        </svg></span></button></li>
                                        </ul>
                                        <div id="globalnav-submenu-link-support" className="globalnav-flyout globalnav-submenu"
                                            aria-labelledby="globalnav-menubutton-link-support"
                                            style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 490px; --r-globalnav-flyout-rate: 240ms;">
                                            <div className="globalnav-flyout-scroll-container">
                                                <div className="globalnav-flyout-content globalnav-submenu-content"
                                                    style="--r-globalnav-flyout-elevated-group-count: 1; --r-globalnav-flyout-group-total: 2; --r-globalnav-flyout-item-total: 9;">
                                                    <div className="globalnav-submenu-group globalnav-submenu-group-elevated"
                                                        data-analytics-region="explore support"
                                                        style="--r-globalnav-flyout-group-number: 0;">
                                                        <h2 className="globalnav-submenu-header" id="a048495e"
                                                            style="--r-globalnav-flyout-item-number: 1;">Explore Support
                                                        </h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="a048495e">
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://support.apple.com/iphone?cid=gn-ols-iphone-psp-explore"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="iphone"
                                                                    data-analytics-exit-link="true">iPhone</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://support.apple.com/mac?cid=gn-ols-mac-psp-explore"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="mac"
                                                                    data-analytics-exit-link="true">Mac</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://support.apple.com/ipad?cid=gn-ols-ipad-psp-explore"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="ipad"
                                                                    data-analytics-exit-link="true">iPad</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://support.apple.com/watch?cid=gn-ols-watch-psp-explore"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="watch"
                                                                    data-analytics-exit-link="true">Watch</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://support.apple.com/airpods?cid=gn-ols-airpods-psp-explore"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="airpods"
                                                                    data-analytics-exit-link="true">AirPods</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 7;"><a
                                                                    href="https://support.apple.com/music?cid=gn-ols-music-psp-explore"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="music"
                                                                    data-analytics-exit-link="true">Music</a></li>
                                                            <li className="globalnav-submenu-list-item-elevated"
                                                                style="--r-globalnav-flyout-item-number: 8;"><a
                                                                    href="https://support.apple.com/tv?cid=gn-ols-tv-psp-explore"
                                                                    className="globalnav-submenu-link" data-analytics-title="tv"
                                                                    data-analytics-exit-link="true">TV</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 9;"><a
                                                                    href="https://support.apple.com/?cid=gn-ols-home-hp-explore"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="explore all support"
                                                                    data-analytics-exit-link="true">Explore Support</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group " data-analytics-region="get help"
                                                        style="--r-globalnav-flyout-group-number: 1;">
                                                        <h2 className="globalnav-submenu-header" id="c6f18bfb"
                                                            style="--r-globalnav-flyout-item-number: 1;">Get Help</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="c6f18bfb">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://discussions.apple.com/welcome?cid=gn-com-community-lp-get_help"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="community"
                                                                    data-analytics-exit-link="true">Community</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://checkcoverage.apple.com/us/en?cid=gn-ols-checkcoverage-lp-get_help"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="check coverage"
                                                                    data-analytics-exit-link="true">Check Coverage</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://support.apple.com/repair?cid=gn-ols-repair-lp-get_help"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="repair"
                                                                    data-analytics-exit-link="true">Repair</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://getsupport.apple.com/?caller=support.header&amp;cid=gn-ols-contact-mgs_lp-get_help"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="contact us"
                                                                    data-analytics-exit-link="true">Contact Us</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="globalnav-submenu-group "
                                                        data-analytics-region="helpful topics"
                                                        style="--r-globalnav-flyout-group-number: 2;">
                                                        <h2 className="globalnav-submenu-header" id="852aa288"
                                                            style="--r-globalnav-flyout-item-number: 1;">Helpful Topics</h2>
                                                        <ul className="globalnav-submenu-list" aria-labelledby="852aa288">
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 2;"><a
                                                                    href="https://www.apple.com/support/products/?cid=gn-ols-home-acpp-helpful_topics"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="get applecare+">Get AppleCare+</a>
                                                            </li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 3;"><a
                                                                    href="https://support.apple.com/apple-id?cid=gn-ols-appleid-psp-helpful_topics"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="apple id &amp; password"
                                                                    data-analytics-exit-link="true">Apple ID &amp;
                                                                    Password</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 4;"><a
                                                                    href="https://support.apple.com/billing?cid=gn-ols-billing-collection-helpful_topics"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="billing &amp; subscriptions"
                                                                    data-analytics-exit-link="true">Billing &amp;
                                                                    Subscriptions</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 5;"><a
                                                                    href="https://support.apple.com/find-my?cid=gn-ols-findmy-collection-helpful_topics"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="find my"
                                                                    data-analytics-exit-link="true">Find My</a></li>
                                                            <li className="globalnav-submenu-list-item"
                                                                style="--r-globalnav-flyout-item-number: 6;"><a
                                                                    href="https://support.apple.com/accessibility?cid=gn-ols-accessibility-psp-helpful_topics"
                                                                    className="globalnav-submenu-link"
                                                                    data-analytics-title="accessibility"
                                                                    data-analytics-exit-link="true">Accessibility</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </li>
                        {/* <li data-topnav-flyout-label="Search apple.com" className="globalnav-item globalnav-search shift-0-1"
                            data-globalnav-iconflyout-enabled="true" data-analytics-region="search"><a role="button"
                                id="globalnav-menubutton-link-search" href="https://www.apple.com/us/search"
                                data-topnav-flyout-trigger-regular="" data-topnav-flyout-trigger-compact=""
                                aria-label="Search apple.com" data-analytics-title="open - search field"
                                className="globalnav-link globalnav-link-search"><span className="globalnav-image-regular"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
                                        <path
                                            d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z">
                                        </path>
                                    </svg>
                                </span><span className="globalnav-image-compact"><svg height="48" viewBox="0 0 17 48" width="17"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z">
                                        </path>
                                    </svg></span></a>
                            <div id="globalnav-submenu-search" aria-labelledby="globalnav-menubutton-link-search"
                                className="globalnav-flyout globalnav-submenu"
                                style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 388px; --r-globalnav-flyout-rate: 240ms;">
                                <div className="globalnav-flyout-scroll-container">
                                    <div className="globalnav-flyout-content globalnav-submenu-content">
                                        <form action="https://www.apple.com/us/search" method="get" className="globalnav-searchfield">
                                            <div className="globalnav-searchfield-wrapper">
                                                <input placeholder="Search apple.com" aria-label="Search apple.com" autoCorrect="off" autoCapitalize="off" autoComplete="off" className="globalnav-searchfield-input" />
                                                <input id="globalnav-searchfield-src" type="hidden" name="src" value="globalnav" />
                                                        <button aria-label="Clear search" tabIndex="-1" type="button" className="globalnav-searchfield-reset" disabled="" aria-hidden="true" >
                                                            <span className="globalnav-image-regular">
                                                                <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="m7 .0339a6.9661 6.9661 0 1 0 6.9661 6.9661 6.9661 6.9661 0 0 0 -6.9661-6.9661zm2.798 8.9867a.55.55 0 0 1 -.778.7774l-2.02-2.02-2.02 2.02a.55.55 0 0 1 -.7784-.7774l2.0206-2.0206-2.0204-2.02a.55.55 0 0 1 .7782-.7778l2.02 2.02 2.02-2.02a.55.55 0 0 1 .778.7778l-2.0203 2.02z">
                                                                    </path>
                                                                </svg>
                                                            </span><span className="globalnav-image-compact">
                                                            <svg height="16"
                                                            viewBox="0 0 16 16" width="16"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m0 8a8.0474 8.0474 0 0 1 7.9922-8 8.0609 8.0609 0 0 1 8.0078 8 8.0541 8.0541 0 0 1 -8 8 8.0541 8.0541 0 0 1 -8-8zm5.6549 3.2863 2.3373-2.353 2.3451 2.353a.6935.6935 0 0 0 .4627.1961.6662.6662 0 0 0 .6667-.6667.6777.6777 0 0 0 -.1961-.4706l-2.3451-2.3373 2.3529-2.3607a.5943.5943 0 0 0 .1961-.4549.66.66 0 0 0 -.6667-.6589.6142.6142 0 0 0 -.447.1961l-2.3686 2.3606-2.353-2.3527a.6152.6152 0 0 0 -.447-.1883.6529.6529 0 0 0 -.6667.651.6264.6264 0 0 0 .1961.4549l2.3451 2.3529-2.3451 2.353a.61.61 0 0 0 -.1961.4549.6661.6661 0 0 0 .6667.6667.6589.6589 0 0 0 .4627-.1961z">
                                                            </path>
                                                        </svg></span></button><button aria-label="Submit search"
                                                    tabIndex="-1" aria-hidden="true" type="submit"
                                                    className="globalnav-searchfield-submit" disabled=""><span
                                                        className="globalnav-image-regular"><svg height="32" viewBox="0 0 30 32"
                                                            width="30" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m23.3291 23.3066-4.35-4.35c-.0105-.0105-.0247-.0136-.0355-.0235a6.8714 6.8714 0 1 0 -1.5736 1.4969c.0214.0256.03.0575.0542.0815l4.35 4.35a1.1 1.1 0 1 0 1.5557-1.5547zm-15.4507-8.582a5.6031 5.6031 0 1 1 5.603 5.61 5.613 5.613 0 0 1 -5.603-5.61z">
                                                            </path>
                                                        </svg></span><span className="globalnav-image-compact"><svg width="38"
                                                            height="40" viewBox="0 0 38 40"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="m28.6724 27.8633-5.07-5.07c-.0095-.0095-.0224-.0122-.032-.0213a7.9967 7.9967 0 1 0 -1.8711 1.7625c.0254.03.0357.0681.0642.0967l5.07 5.07a1.3 1.3 0 0 0 1.8389-1.8379zm-18.0035-10.0033a6.5447 6.5447 0 1 1 6.545 6.5449 6.5518 6.5518 0 0 1 -6.545-6.5449z">
                                                            </path>
                                                        </svg></span></button></div>
                                            <div role="status" aria-live="polite"
                                                data-topnav-searchresults-label="total results"
                                                className="globalnav-searchresults-count"></div>
                                        </form>
                                        <div className="globalnav-searchresults">
                                            <div className="globalnav-searchresults-current">
                                                <div className="globalnav-searchresults-container"
                                                    data-analytics-region="defaultlinks search"
                                                    style="--r-globalnav-flyout-group-number: 0;">
                                                    <h2 className="globalnav-searchresults-header"
                                                        style="--r-globalnav-flyout-item-number: 0;">Quick Links</h2>
                                                    <ul className="globalnav-searchresults-list" role="list">


                                                        <li className="globalnav-searchresults-list-item" role="listitem"
                                                            style="--r-globalnav-flyout-item-number: 1;">
                                                            <a className="globalnav-searchresults-list-link"
                                                                href="https://www.apple.com/retail/" data-query="no keyword"
                                                                data-section="quicklinks" data-items="5" data-index="0"
                                                                data-label="Find a Store" data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
                                                events:event38">
                                                                <span className="globalnav-searchresults-list-icon">

                                                                    <span
                                                                        className="globalnav-image-regular globalnav-link-image"><svg
                                                                            height="16" viewBox="0 0 9 16" width="9"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z">
                                                                            </path>
                                                                        </svg></span><span
                                                                        className="globalnav-image-compact globalnav-link-image"><svg
                                                                            height="25" viewBox="0 0 13 25" width="13"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z">
                                                                            </path>
                                                                        </svg></span>


                                                                </span>
                                                                <span className="globalnav-searchresults-list-text">Find a
                                                                    Store</span>
                                                            </a>
                                                        </li>
                                                        <li className="globalnav-searchresults-list-item" role="listitem"
                                                            style="--r-globalnav-flyout-item-number: 2;">
                                                            <a className="globalnav-searchresults-list-link"
                                                                href="https://www.apple.com/apple-vision-pro/"
                                                                data-query="no keyword" data-section="quicklinks"
                                                                data-items="5" data-index="1" data-label="Apple Vision Pro"
                                                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
                                                events:event38">
                                                                <span className="globalnav-searchresults-list-icon">

                                                                    <span
                                                                        className="globalnav-image-regular globalnav-link-image"><svg
                                                                            height="16" viewBox="0 0 9 16" width="9"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z">
                                                                            </path>
                                                                        </svg></span><span
                                                                        className="globalnav-image-compact globalnav-link-image"><svg
                                                                            height="25" viewBox="0 0 13 25" width="13"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z">
                                                                            </path>
                                                                        </svg></span>


                                                                </span>
                                                                <span className="globalnav-searchresults-list-text">Apple Vision
                                                                    Pro</span>
                                                            </a>
                                                        </li>
                                                        <li className="globalnav-searchresults-list-item" role="listitem"
                                                            style="--r-globalnav-flyout-item-number: 3;">
                                                            <a className="globalnav-searchresults-list-link"
                                                                href="https://www.apple.com/airpods/"
                                                                data-query="no keyword" data-section="quicklinks"
                                                                data-items="5" data-index="2" data-label="AirPods"
                                                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
                                                events:event38">
                                                                <span className="globalnav-searchresults-list-icon">

                                                                    <span
                                                                        className="globalnav-image-regular globalnav-link-image"><svg
                                                                            height="16" viewBox="0 0 9 16" width="9"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z">
                                                                            </path>
                                                                        </svg></span><span
                                                                        className="globalnav-image-compact globalnav-link-image"><svg
                                                                            height="25" viewBox="0 0 13 25" width="13"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z">
                                                                            </path>
                                                                        </svg></span>


                                                                </span>
                                                                <span
                                                                    className="globalnav-searchresults-list-text">AirPods</span>
                                                            </a>
                                                        </li>
                                                        <li className="globalnav-searchresults-list-item" role="listitem"
                                                            style="--r-globalnav-flyout-item-number: 4;">
                                                            <a className="globalnav-searchresults-list-link"
                                                                href="https://www.apple.com/airtag/" data-query="no keyword"
                                                                data-section="quicklinks" data-items="5" data-index="3"
                                                                data-label="AirTag" data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
                                                events:event38">
                                                                <span className="globalnav-searchresults-list-icon">

                                                                    <span
                                                                        className="globalnav-image-regular globalnav-link-image"><svg
                                                                            height="16" viewBox="0 0 9 16" width="9"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z">
                                                                            </path>
                                                                        </svg></span><span
                                                                        className="globalnav-image-compact globalnav-link-image"><svg
                                                                            height="25" viewBox="0 0 13 25" width="13"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z">
                                                                            </path>
                                                                        </svg></span>


                                                                </span>
                                                                <span
                                                                    className="globalnav-searchresults-list-text">AirTag</span>
                                                            </a>
                                                        </li>
                                                        <li className="globalnav-searchresults-list-item" role="listitem"
                                                            style="--r-globalnav-flyout-item-number: 5;">
                                                            <a className="globalnav-searchresults-list-link"
                                                                href="https://www.apple.com/us/shop/goto/trade_in"
                                                                data-query="no keyword" data-section="quicklinks"
                                                                data-items="5" data-index="4" data-label="Apple Trade In"
                                                                data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
                                                events:event38">
                                                                <span className="globalnav-searchresults-list-icon">

                                                                    <span
                                                                        className="globalnav-image-regular globalnav-link-image"><svg
                                                                            height="16" viewBox="0 0 9 16" width="9"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m8.6124 8.1035-2.99 2.99a.5.5 0 0 1 -.7071-.7071l2.1366-2.1364h-6.316a.5.5 0 0 1 0-1h6.316l-2.1368-2.1367a.5.5 0 0 1 .7071-.7071l2.99 2.99a.5.5 0 0 1 .0002.7073z">
                                                                            </path>
                                                                        </svg></span><span
                                                                        className="globalnav-image-compact globalnav-link-image"><svg
                                                                            height="25" viewBox="0 0 13 25" width="13"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="m12.3577 13.4238-4.4444 4.4444a.6.6 0 0 1 -.8486-.8477l3.37-3.37h-9.3231a.65.65 0 0 1 0-1.3008h9.3232l-3.37-3.37a.6.6 0 0 1 .8486-.8477l4.4444 4.4444a.5989.5989 0 0 1 -.0001.8474z">
                                                                            </path>
                                                                        </svg></span>


                                                                </span>
                                                                <span className="globalnav-searchresults-list-text">Apple Trade
                                                                    In</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="globalnav-bag" data-analytics-region="bag" className="globalnav-item globalnav-bag"
                            data-globalnav-iconflyout-enabled="true">
                            <div className="globalnav-bag-wrapper"><a role="button" id="globalnav-menubutton-link-bag"
                                    href="https://www.apple.com/us/shop/goto/bag" aria-label="Shopping Bag"
                                    data-globalnav-item-name="bag" data-topnav-flyout-trigger-regular=""
                                    data-topnav-flyout-trigger-compact="" data-analytics-title="open - bag"
                                    className="globalnav-link globalnav-link-bag"><span className="globalnav-image-regular"><svg
                                            height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z">
                                            </path>
                                        </svg></span><span className="globalnav-image-compact"><svg height="48"
                                            viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z">
                                            </path>
                                        </svg></span></a><span aria-hidden="true" data-analytics-title="open - bag"
                                    className="globalnav-bag-badge"><span className="globalnav-bag-badge-separator"></span><span
                                        className="globalnav-bag-badge-number">0</span><span
                                        className="globalnav-bag-badge-unit">+</span></span></div>
                            <div id="globalnav-submenu-bag" aria-labelledby="globalnav-menubutton-link-bag"
                                className="globalnav-flyout globalnav-submenu"
                                style="--r-globalnav-flyout-item-total: 0; --r-globalnav-flyout-group-number: 0; --r-globalnav-flyout-height: 207px; --r-globalnav-flyout-rate: 240ms; --r-globalnav-scrollbar-width: 17px;">
                                <div className="globalnav-flyout-scroll-container">
                                    <div className="globalnav-flyout-content globalnav-submenu-content">
                                        <div className="ac-gn-loading-indicator">
                                            <div data-progress-indicator=""
                                                className="progress-indicator progress-indicator-indeterminate progress-indicator-curtain progress-indicator-visible ac-gn-progress-indicator-curtain"
                                                aria-label="aria-label-from-constructor"><svg
                                                    className="progress-indicator-icon" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 56 56" aria-hidden="true">
                                                    <g className="progress-indicator-spokes">
                                                        <path className="progress-indicator-spoke"
                                                            d="M28,8.5A2.5,2.5,0,0,1,30.5,11v7a2.5,2.5,0,0,1-5,0V11A2.5,2.5,0,0,1,28,8.5Z">
                                                        </path>
                                                        <path className="progress-indicator-spoke"
                                                            d="M41.79,14.21a2.52,2.52,0,0,1,0,3.54L36.84,22.7a2.5,2.5,0,0,1-3.54-3.54l5-4.95A2.52,2.52,0,0,1,41.79,14.21Z">
                                                        </path>
                                                        <path className="progress-indicator-spoke"
                                                            d="M47.5,28A2.5,2.5,0,0,1,45,30.5H38a2.5,2.5,0,0,1,0-5h7A2.5,2.5,0,0,1,47.5,28Z">
                                                        </path>
                                                        <path className="progress-indicator-spoke"
                                                            d="M41.79,41.79a2.52,2.52,0,0,1-3.54,0l-5-4.95a2.5,2.5,0,0,1,3.54-3.54l4.95,5A2.52,2.52,0,0,1,41.79,41.79Z">
                                                        </path>
                                                        <path className="progress-indicator-spoke"
                                                            d="M28,47.5A2.5,2.5,0,0,1,25.5,45V38a2.5,2.5,0,0,1,5,0v7A2.5,2.5,0,0,1,28,47.5Z">
                                                        </path>
                                                        <path className="progress-indicator-spoke"
                                                            d="M14.21,41.79a2.52,2.52,0,0,1,0-3.54l4.95-5a2.5,2.5,0,0,1,3.54,3.54l-4.95,4.95A2.52,2.52,0,0,1,14.21,41.79Z">
                                                        </path>
                                                        <path className="progress-indicator-spoke"
                                                            d="M8.5,28A2.5,2.5,0,0,1,11,25.5h7a2.5,2.5,0,0,1,0,5H11A2.5,2.5,0,0,1,8.5,28Z">
                                                        </path>
                                                        <path className="progress-indicator-spoke"
                                                            d="M14.21,14.21a2.52,2.52,0,0,1,3.54,0l4.95,4.95a2.5,2.5,0,0,1-3.54,3.54l-4.95-4.95A2.52,2.52,0,0,1,14.21,14.21Z">
                                                        </path>
                                                    </g>
                                                </svg></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>


                <span style={{ visibility: "hidden", position: "absolute", top: "0px", zIndex: "-1" }}>
                    &nbsp;
                </span>
            </nav>
        </>
    )
}

export default NavigationBar
