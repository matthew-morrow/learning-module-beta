# Implementing Google Analytics 4 in Learning Modules: A Guide

This readme is a guide for implementing GA4 analytics tracking of events in learning modules found on the ECLKC site. Events are user interactions with content that can be measured independently from a web-page or screen load. Events in a learning module such as Module Start, Module Finish, Slide View, and Object Interactions on Slides are examples that can be implemented using the information presented below.

## Adding the Google Analytics (gtag.js) tag

Paste the snippet below right before the `<\head>` tag in the story.html file provided by Articulate after publishing the learning module.

Replace the `[google-analytics-id]` below with the appropriate GA4 property ID provided by the Head Start Information and Communication Center (HSICC). Replace `'Google Analytics Example'` in `gtag('set', 'appName', 'Google Analytics Example');` with the name of the learning module.

```html
<!-- Global site tag (gtag.js) - Google Analytics -->

    <script async
      src="https://www.googletagmanager.com/gtag/js?id=[google-analytics-id]">
    </script>

    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', '[google-analytics-id]');
      gtag('set', 'appName', 'Google Analytics Example');
    </script>

<!-- end of Global site tag (gtag.js) -->

</head>
```

## Adding Event Triggers in Articulate Storyline

*[Articulate Storyline: Working with Triggers](https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-work-with-triggers)*

|Section|Description|GA4 Examples|
|---------|---------|---------|
|Slide Triggers|Slide triggers always appear at the top of the Triggers panel. They often rely on the timeline of the slide or layer—e.g., when the timeline starts, ends, or reaches a certain point.|screen_view|*
|Object Triggers|Object triggers apply to objects on the slide (images, characters, text boxes, etc.), and they generally occur when the learner performs an action, such as clicking a button, hovering over a hot spot, or dragging an object. Object triggers can also occur when other events take place—e.g., when the state of another object changes, an animation completes, or an object leaves the slide.|select_content|

![Trigger Types](https://articulate-heroes.s3.amazonaws.com/uploads/rte/ypzgoumw_trigger-locations-3.png)

## Screen/Slide View Events

**Screen View**: *[Google Documentation](https://developers.google.com/gtagjs/reference/event#screen_view)*

In Google Analytics 4, use screen_view events to measure specific screen views in Google Analytics. This provides similar functionality to Firebase screen_view events on native Android or iOS apps, or page view events on standard web pages.
Screen views can be sent using the event command as follows:
`gtag('event', 'screen_view', {<screen_view_parameters>});`

In Articulate Storyline 360, you can use the Execute JavaScript slide trigger to track screen hits. In this implementation, the action is triggered when the timeline starts.

| Name       | Type   | Required | Application for Learning Modules                 |
|------------|--------|----------|--------------------------------------------------|
| screen_name | string | No       | The name of the slide within a learning module |

```javascript
gtag('event', 'screen_view', {'app_name':'Google Analytics Example','screen_name': 'Welcome'});
```

## Start/End Level or Tutorial Events

Insert description about this section

### **Level Start**

This event signifies that a player has started a level. *[Google Documentation](https://developers.google.com/gtagjs/reference/ga4-events#level_start)*

| Name       | Type   | Required | Application for Learning Modules                 |
|------------|--------|----------|--------------------------------------------------|
| level_name | string | No       | The name of the section within a learning module |

Sample Code:

```javascript
gtag('event', 'level_start', {level_name:'Google Analytics Module - Section One'});
```

**Level End**: *[Google Documentation](https://developers.google.com/gtagjs/reference/ga4-events#level_end)*

This event signifies that a player has started a level.

| Name       | Type   | Required | Application for Learning Modules                                      |
|------------|--------|----------|--------------------------------------------------|
| level_name | string | No | The name of the section within a learning module |
| success | boolean | No | Set to **true** if the level was completed successfully. |

Sample Code:

```javascript
gtag('event', 'level_end', {level_name: 'Google Analytics Module - Section One', success: true,});
```

## Select Content Events

## Custom Events

### Quizzes

### Post
