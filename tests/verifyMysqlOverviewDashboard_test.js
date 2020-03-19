
Feature('to verify MySQL Overview Dashboards');

Before((I, loginPage) => {
    I.amOnPage(loginPage.url);
    loginPage.login("admin", "admin");
});

Scenario('Open the MySQL Overview Dashboard and verify Metrics are present and graphs are displayed',
        async (I, adminPage, dashboardPage) => {
    I.amOnPage(dashboardPage.mysqlInstanceSummaryDashboard.url);
    dashboardPage.waitForDashboardOpened();
    await dashboardPage.expandEachDashboardRow();
    I.click(adminPage.fields.metricTitle);
    adminPage.peformPageDown(2);
    dashboardPage.verifyMetricsExistence(dashboardPage.mysqlInstanceSummaryDashboard.metrics);
    await dashboardPage.verifyThereIsNoGraphsWithNA();
    await dashboardPage.verifyThereIsNoGraphsWithoutData();
});
