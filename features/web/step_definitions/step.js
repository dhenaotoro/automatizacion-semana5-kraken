const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

const SigninPage = require('./page_object/signin_page.js');
const DashboardPage = require('./page_object/dashboard_page.js');
const PagesPage = require('./page_object/pages_page.js');


const signinPage = new SigninPage(this.driver);
const dashboardPage = new DashboardPage(this.driver);
const pagesPage = new PagesPage(this.driver);

// Sign in capability
Given('I signin into ghost admin', signinPage.EnterLoginCredentials);

// Pages Capabilities
When('I click pages', dashboardPage.ClickPagesLink);

When('I click newPage', pagesPage.ClickNewPageButton);

When('I enter pageTitle {string}', pagesPage.EnterPageTitle);

When('I type a page content as {string}', pagesPage.EnterPageContent);

When('I click on page content', pagesPage.ClickOnPageContent);

When('I click on publish button', pagesPage.ClickOnPublishPageButton);

When('I click on continue button', pagesPage.ClickOnContinuePublishPageButton);

When('I click on publish right now button', pagesPage.ClickOnPublishPageRightNowButton);

When('I click on back to page editor', pagesPage.ClickOnBackToPageEditorButton);

When('I go back to pages', pagesPage.ClickOnGoBackToPagesButton);

Then('The most recent page title should be {string}', pagesPage.ValidateRecentPageMustToHaveTheTitle);

Then('The most recent page title should not be {string}', pagesPage.ValidateRecentPageMustNotToHaveTheTitle);

Then('I click firt page to edit', pagesPage.ClickFirstPageToEdit);

When('I click on update button', pagesPage.ClickOnUpdatePageButton);

When('I click on unpublish button', pagesPage.ClickOnUnpublishPageButton);

When('I click on unpublish confirmation button', pagesPage.ClickOnUnpublishPageConfirmationButton);

When('I click on page setting button', pagesPage.ClickOnPageSettingButton);

When('I click on delete page button', pagesPage.ClickOnDeletePageButton);

When('I click on confirmation delete page button', pagesPage.ClickOnConfirmationDeletePageButton);

Then('The most recent page status should be {string}', pagesPage.ValidateRecentStatusPageMustBe);

When('I click on select publish page mode button', pagesPage.ClickOnSelectPublishPageModeButton);

When('I select schedule for late option', pagesPage.SelectScheduleForLateOption);

When('I click on go back to page editor', pagesPage.ClickOnGoBackToPageEditorButton);



When('I click sign in', async function() {
    let element = await this.driver.$('#ember7');
    return await element.click();
});

When('I click on option Posts', async function() {
    let element = await this.driver.$('ul.gh-nav-list.gh-nav-manage > li:first-child');
    return await element.click();
});

When('I click on New post', async function() {
    let element = await this.driver.$('section.view-actions > a');
    return await element.click();
});

When('I type a post title as {kraken-string}', async function (postTitle) {
    let element = await this.driver.$('textarea.ember-text-area');
    return await element.setValue(postTitle);
})

When('I click on post content', async function() {
    let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor');
    return await element.click();
});

When('I type a post content as {kraken-string}', async function (postContent) {
    let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor > p');
    return await element.setValue(postContent);
});

When('I click on publish', async function () {
    let element = await this.driver.$('.gh-publish-trigger span');
    return await element.click();
});

When('I click on continue, final review', async function () {
    let element = await this.driver.$('.gh-btn-large span');
    return await element.click();
});

When('I click on publish post, right now', async function () {
    let element = await this.driver.$('.gh-btn-large span');
    return await element.click();
});

When('I click on publish post, on 2 days', async function () {
    let element = await this.driver.$('.gh-btn-large span');
    return await element.click();
});


When('I click on back to editor', async function () {
    let element = await this.driver.$('.gh-back-to-editor span');
    return await element.click();
});

When('I click on back to editor for scheduled posts', async function () {
    let element = await this.driver.$('.gh-btn-editor:not(.gh-publish-trigger) span');
    return await element.click();
});

When('I go back to posts', async function () {
    let element = await this.driver.$('.gh-btn-editor:not(.gh-publish-trigger) span');
    return await element.click();
});

Then('The result should be {kraken-string}', async function (expectedTitle) {
    let elements = await this.driver.$$('.gh-posts-list-item-labs .gh-content-entry-title');
    return Promise.all(
        elements.map(async(element) => {
            return await element.getText();
        })
    ).then(async(texts) => { 
        let findedText = texts.find(text => text === expectedTitle);
        return await expect(findedText).not.to.eql(undefined);
    });
});

When('I click on right now option', async function () {
    let element = await this.driver.$('.gh-publish-setting.last > button');
    return await element.click();
});

When('I click on schedule for later', async function () {
    let element = await this.driver.$('div .gh-publish-schedule .gh-radio:nth-child(2)');
    return await element.click();
});

When('I click on datepicker', async function () {
    let element = await this.driver.$('div .ember-power-calendar');
    return await element.click();
});

When('I select {kraken-string} days after', async function (days) {
    let date = new Date();
    date.setDate(date.getDate() + parseInt(days));
    let element = await this.driver.$('div .ember-power-calendar > div:first-child > div:first-child > input');
    return await element.setValue(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
});

When('I click on Drafts', async function () {
    let elements = await this.driver.$$('ul.gh-nav-view-list > li:first-child > a');
    return await elements[0].click();
});

When('I click on first draft', async function () {
    let elements = await this.driver.$$('.gh-post-list-button a.gh-post-list-cta');
    return await elements[0].click();
});

When('I click on menu info', async function () {
    let elements = await this.driver.$$('button.gh-btn-editor');
    return await elements[2].click();
});

When('I click on delete button', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button');
    return await element.click();
});

When('I click on modal delete button', async function () {
    let element = await this.driver.$('.modal-footer .gh-btn:not(:first-child)');
    return await element.click();
});

Then('The result should not be {kraken-string}', async function (expectedTitle) {
    let elements = await this.driver.$$('.gh-posts-list-item-labs .gh-content-entry-title');
    return Promise.all(
        elements.map(async(element) => {
            return await element.getText();
        })
    ).then(async(texts) => { 
        let findedText = texts.find(text => text === expectedTitle);
        return await expect(findedText).to.be.an('undefined');
    });
});

When('I click on Published', async function () {
    let elements = await this.driver.$$('ul.gh-nav-view-list > li:nth-child(3) > a');
    return await elements[0].click();
});

When('I click on first published', async function () {
    let elements = await this.driver.$$('.gh-post-list-button a.gh-post-list-cta');
    return await elements[0].click();
});

Then('Should be 0 conversions', async function () {
    let element = await this.driver.$('.gh-tabs-analytics .tab-list h3');
    return expect(await element.getText()).to.eql('0');
});

// STEPS TAGS

When('I click on option Tags', async function() {
    let element = await this.driver.$('a[href="#/tags/"');
    return await element.click();
});

When('I click on New tag', async function() {
    let element = await this.driver.$('a[href="#/tags/new/"');
    return await element.click();
});

When('I type a tag title as {string}', async function (title){
    let element = await this.driver.$('input[id="tag-name"]');
    return await element.setValue(title)
});

When('I type a tag slug as {string}', async function (slug){
    let element = await this.driver.$('input[id="tag-slug"]');
    return await element.setValue(slug)
});

When('I type a tag description as {string}', async function (description){
    let element = await this.driver.$('textarea[id="tag-description"]');
    return await element.setValue(description)
});

When('I type a tag color as {string}', async function (color){
    let element = await this.driver.$('input[name="accent-color"]');
    return await element.setValue(color)
});

When('I click on expand buttons', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-expand"');
    return await element.click();
});

When('I type a tag meta title as {string}', async function (title){
    let element = await this.driver.$('input[id="meta-title"]');
    return await element.setValue(title)
});

When('I type a tag meta description as {string}', async function (description){
    let element = await this.driver.$('textarea[id="meta-description"]');
    return await element.setValue(description)
});

When('I type a tag meta url as {string}', async function (url){
    let element = await this.driver.$('input[id="canonical-url"]');
    return await element.setValue(url)
});

When('I click on save tag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
    return await element.click();
});

Then('The most recent tag title should be {string}', async function (expectedTitle) {
    let textFirstPage = await this.driver.$('ol[class="tags-list gh-list "]').$$('li[class="gh-list-row gh-tags-list-item"]')[0].$('a').$('h3[class="gh-tag-list-name"]').getText();
    return await expect(expectedTitle).to.eql(textFirstPage);
});

When('I click in first tag list', async function() {
    let element = await this.driver.$('a[href="#/tags/tag-test-1/"]');
    return await element.click();
});

When('I click in delete tag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon"]');
    return await element.click();
});

When('I click in confirm modal', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
});

Then('Return the tags list', async function () {    
    let textFirstPage = await this.driver.$('div[class="gh-canvas-header sticky"]').$('header[class="gh-canvas-header-content"]').$('h2').getText();
    return await expect("Tags").to.eql(textFirstPage);
});

When('I click in reject modal', async function() {
    let element = await this.driver.$('button[class="gh-btn"]');
    return await element.click();
});

Then('I expect to see error {string}', error => async function()  {
    $('div=You must specify a name for the tag.').waitForDisplayed(5000);
    var alertText = await this.driver.$('span[class="error"]').$('p[class="response"]').getText();
    return await expect(alertText).to.include(error);
});
