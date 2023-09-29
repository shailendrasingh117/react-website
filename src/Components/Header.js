import React from 'react'

function Header() {
  return (
    <div>
    <header className="navbar fixed-nav-bar">
    <div className="navbar-container">
    <a href="www.example.com" class="logo"><img src="../Assets/SL-111719-25140-24.jpg" alt=""/></a>
        <div className="toggleMenu" onclick="toggleMenu();"></div>
    </div>
    <nav className="navigation" id="menu">
        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#project">Products</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <div className="header-icons">
        <button className="account-icon" onclick="handleAccountClick()">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVR4nO2ZaYhNYRjHf2YwZP9gi8laI8QHS0qRbWSNEYUv8mFE+SJbSCNlZJdE8kEhW5QoiiLbRLKvkSW7sW9jbKOn/rfermucOedc50zNv04z3fu+//v/3/d9n+d5nwtVqEIV/jcygJ7ALGANsEPPWmACUI+YI0vinwNl5TyvgPHEFNnALUfsbWAdMB0YB4wFZgLH9P5PYL/eq0ZM0Ay4K4FXgYH/GL8gaYWOAg2JAXZLUBHQwMN4W4E2wFRnGx4kYuQAv4BP2l4VRWudGTOTS4SYJxGbQ+DYRoQ4IBFjAnB0Fsd9IsRViegUgKOuOL4DmUSE6xJhe90vqjsRrDYRr0jHAByZChiRrsgFGekegKONOB4SIXZJhGVuv8gVxykixEKJKAzAMV8cVlRGhjEScTgAx4kQQnhgTJKI1z6Lv6Y65MaRR4Q4JxFTfM63KLVIHPuIEA8lol0Ajt7iOEmEOCwRtsX8Ij8OtdY0JwfM9TG/AHgsjolEiFrAWQm5WcG5Fhzeau5xoAYRoz7wDfihAtAr2svEC6AmMcEJibIuiVfM0hzrsMQG+RJ1zmM+qan7h80ZRoxQyzm0KzyM36qxl9QH84q2wB6gGHgP7A0Y+lNihMQ99TA2cf/oVgH+POBLij6ZnbFWhIjmPox4xWgFFJtzT6WNrc4RvbadSmBklGPip/5u0FnMdmq9WBsZCZRq7CJtr2+OmWb639pRoWGwSL8CTcoZ18IxUl7TYrhjYrHzumvmfgjXiD9ueS8dgVayzFCrp546kF3Vw3rmjHsE9E3BN0xfiI1ZkuL9PCXgMpntEUS87dFBwCE1DxKtzzP/6MYnSpJEQ9uepQ7vEMeE+3pyjZbYUv2C5IzJwGVHiBHO0f0iU3vbMvYN4KNi/jVgi8xnqLYqUAPD9rrBtmeJOJd5MNHHj4EmWuZix8BTddcbE872LBHvynSYsG94NvDBMVCksjusYm+gk+xWp8NEw6S9fCRgDysV+jsm1v6lVgtkwqLNeRE8UWIKG3ZQP+sz7Beu0E2ghGMEd4CWhI++EmefsT5dJnIUUksDdtr/ho6OiU3pMoFCn5FsJD0odM7dSd0yXYRiAkUlIxpAenDRycpluvc3CtuE4Y2H7FzRx36CSBSXv5Qzejl5yRLjsjBNZKXBhD3Lk9qsFsoNXYB3SVVCHyoBdkrwAR30B5XRRIYuQe5KlaqItFKnQ9QCvcLKndPAFWAVMBSoEwbzb8vafGTHGBCwAAAAAElFTkSuQmCC"/>
        </button>
        <button className="cart-icon" onclick="handleCartClick()">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkklEQVR4nO3XL2hWURQA8B8bfIaZBIvGGQTBsCJiE8EiwzAMMovM5trEshkE57cwTC5qkqHBMMaKYDVoUFDcFrT47U+zKAiC48ELhk/Z9p13LzzuDw6vvHO45933DvdRFEVRZLaJP/+I3zivBZZwO+hhZTWNxwF1qt3N6hJet6GRE9jJ3MgRfApYg+84lrGRs/gowBtcOMD9n/8zBf+O6r79uI7nAjzBVMYdmcecAHewmLGRFVwV4ArWMjbyBacEGMXXTI0cxQ8MCzBUFxsZoMZhx+c5vBPoPcakN4WnkQWXMSm9R5iJLHgPD6T3CpcjC07gpbSGsIuTkUXPYF36A+vb6KId/KyvKYzWI3+8ieLVjizgboMxhxf1K3VLQ6pvZBXdBuM+ruG4BlWHt1ktcAPPtMAYPmiBYWzhtBa4iQ1cTDiKGzNRn0h/7fOX9qCx2dzSi6I4jE599qpGcq8+YnQS5ofp9pk43YT5Ybb6LGQ7YX6YXp+FfEuYH6bfq/EwYX6YTr2Y3gAf+yD5RVEUhWz2AFRCrUSboydIAAAAAElFTkSuQmCC"/>
        </button>
    </div>
</header>
    </div>
  )
}

export default Header;
