from base.seleniumbase import SeleniumBase
from selenium.webdriver.remote.webelement import WebElement
from typing import List


class HomepageNav(SeleniumBase):
    def __init__(self, driver):
        super().__init__(driver)
        self.driver = driver
        self.__nav_links: str = '#mainNavigationFobs>li'
        self.NAV_LINK_TEXT = 'Gifts,Women,Men,Kids & Baby,Beauty,Home,Furniture,Shoes,Jewelry,Handbags & Accessories,Now Trending,Sale'

    def get_nav_links(self) -> List[WebElement]:
        '''Return WebElements for nav links'''
        return self.are_visible('css', self.__nav_links, 'Header Navigation Links')

    def get_nav_links_text(self) -> str:
        '''Return all nav links text. Return format is a String with comma separated values'''
        nav_links = self.get_nav_links()
        nav_links_text = self.get_text_from_webelements(nav_links)
        return ','.join(nav_links_text)