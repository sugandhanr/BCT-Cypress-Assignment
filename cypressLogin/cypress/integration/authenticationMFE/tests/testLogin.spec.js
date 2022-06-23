import LoginPage from '../pages/loginPage'

describe('Login page tests', function () {
  const loginPage = new LoginPage()

  before(function () {
    cy.clearCookies()
  })

  beforeEach(function () {
    cy.visit('/login')
  })

  it('validate User Without entering username and password', function () {
    loginPage.clickSubmit()
    loginPage.getLoginFailureError().should('contain.text', 'You have entered an incorrect username or password.')

  })

  it('should show invalid email or password error message', function () {
    loginPage.loginUser('Sansugan@gmail.com', 'password')
    loginPage.getLoginFailureError().should('contain.text', 'You have entered an incorrect username or password.')
  })

  it('Successfully login and redirected to dashboard', function () {
    loginPage.loginUser(Cypress.env('rody.bothe+123@bynder.com'), Cypress.env('FakePassword!'))
    cy.url().should('contain', 'https://wave-trial.getbynder.com/account/dashboard/')

  })
  it('validate User Logout Function', function ()

    loginPage.clickMenu()
    cy.url().should('contain', 'https://wave-trial.getbynder.com/login/')

  })
})
