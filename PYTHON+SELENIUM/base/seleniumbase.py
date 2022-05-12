from selenium.webdriver.common.by import  By
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.remote.webelement import  WebElement
from typing import List


class SeleniumBase:
 def __init__(self, driver):
     self.driver = driver
     self.wait = WebDriverWait(driver, 10)

 def __get_selenium_by(self, find_by: str) -> dict:
     find_by = find_by.lower()
     locating = {'css': By.CSS_SELECTOR,
                     'xpath': By.XPATH,
                     'CLASS_NAME':By.CLASS_NAME,
                     'ID':By.ID,
                     'NAME':By.NAME,
                     'PARTIAL_LINK_TEXT':By.PARTIAL_LINK_TEXT,
                     'TAG_NAME':By.TAG_NAME}
     return locating[find_by]

 def is_visible(self, find_by: str, locator: str, locator_name: str = None) -> WebElement:
     return  self.wait.until(ec.visibility_of_element_located((self.__get_selenium_by(find_by), locator)), locator_name)

 def is_present(self, find_by: str, locator: str, locator_name: str = None) -> WebElement:
     return  self.wait.until(ec.presence_of_element_located((self.__get_selenium_by(find_by), locator)), locator_name)

 def is_not_present(self, find_by: str, locator: str, locator_name: str = None) -> WebElement:
     return  self.wait.until(ec.invisibility_of_element_located((self.__get_selenium_by(find_by), locator)), locator_name)


def are_visible(self, find_by: str, locator: str, locator_name: str = None) -> List[WebElement]:
    return self.wait.until(ec.visibility_of_all_elements_located((self.__get_selenium_by(find_by), locator)), locator_name)


def are_present(self, find_by: str, locator: str, locator_name: str = None) -> List[WebElement]:
    '''Waiting on elements and return WebElements if they are present on DOM'''
    return self.__wait.until(ec.presence_of_all_elements_located((self.__get_selenium_by(find_by), locator)),
                             locator_name)
