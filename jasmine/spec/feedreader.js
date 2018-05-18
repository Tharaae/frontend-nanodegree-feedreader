/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* A test suite for tests related to every individual feed */
    describe('Each RSS Feed', function() {

      /* a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it('should has defined URL', function() {
        //for each feed
        allFeeds.forEach(function(feed) {
          //check that URL exists and not empty
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        });
      });

      /* a test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it('should has defined Name', function() {
        //for each feed
        allFeeds.forEach(function(feed) {
          //check that URL exists and not empty
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        });
      });
    });
  });

  /* a test suite for tests related to the menu */
  describe('The menu', function() {

    /* a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('should be hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('should change visibility when menu icon is clicked', function() {
      // get menu icon element
      const menuIcon = $('.menu-icon-link');

      // click menu icon
      menuIcon.trigger('click');
      // check that menu is visible
      expect($('body').hasClass('menu-hidden')).toBe(false);

      // click menu icon again
      menuIcon.trigger('click');
      // check that menu is hidden
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* A test suite for tests related to Initial Entries with loadFeed */
  describe('Initial Entries', function() {

    /* loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    /* a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    it('should create at least one entry', function(done) {
      expect($('.feed').find('.entry').length).not.toBe(0);
      done();
    });
  });

  /* A test suite for tests related to New Feed Selection */
  describe('New Feed Selection', function() {
    //get initial header title text
    const initialTitle = $('.header-title').text();

    // Second feed index
    // (can be any feed other than the first that is already loaded)
    const anotherFeedIndex = 1;

    /* loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done) {
      // load the selected feed
      loadFeed(anotherFeedIndex, function() {
        done();
      });
    });

    /* a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    it('should actually change content', function(done) {

      // check that the header title changed after selecting another feed
      expect($('.header-title').text()).not.toBe(initialTitle);

      // check that the header title is correctly set to the selected feed name
      expect($('.header-title').text()).toBe(allFeeds[anotherFeedIndex].name);
      done();
    });
  });
}());
