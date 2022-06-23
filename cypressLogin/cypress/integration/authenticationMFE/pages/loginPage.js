class LoginPage {
  loginUser(userEmail, userPassword) {
    cy.get('//*[@id="inputEmail"]').type(userEmail)
    cy.get('//*[@id="inputPassword"]').type(userPassword)
    this.clickSubmit()
    this.clickLogout()
    this.clickMenu()
  }
  clickLogut() {
    cy.get('//*[@class="fa fa-power-off"]').click()
  }
  clickMenu() {
    cy.get('//*[@title="Rody Bothe"]').click()
  }

  clickSubmit() {
    cy.get('//*[@tabindex="4"]').click()
  }

  getDashboardMenu() {
    return cy.get('//*[@title="Rody Bothe"]')
  }

  getLogoutButton() {
    return cy.get('//*[@class="fa fa-power-off"]')
  }

  getLoginFailureError() {
    return cy.get('//*[@class="cbox_messagebox"]')
  }
}

export default LoginPage
