import pytest
from selenium import webdriver
from selenium.webdriver.common.by import  By
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.ui import WebDriverWait

@pytest.mark.usefixtures('setup')
class TestHompage:
    def test_hompage(self):
        driver = webdriver.Chrome()
        driver.implicitly_wait(1)
        driver.find_elemen(By.CSS_SELECTOR, '#id_123')

        wait = WebDriverWait(driver, 15)
        element  = wait.until(ec.visibility_of_element_located((By.CSS_SELECTOR, '#id_123'))) #kakyato huina so skobkami