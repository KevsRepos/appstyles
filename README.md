# Appstyles CSS

Ever wanted to have a 
- *flexible*, 
- *platform-specific*, 
- *dynamic*, 
- *easy-to-use*, 
- *framework-agnostic*, 
- *extensible*

... UI library?

## You found it!

**Appstyles** is a UI library that includes Material design and IOS design classes. Both implemented based on which one *you* need!

### You're not bound to a framework
**Appstyles** is framework agnostic and can be used in any framework or without a framework. But if you choose to go with a framework, thats totally okay, because **Appstyles**
is built to work *perfectly* with a framework. Lets take the alert as an example:

```html
<dialog class="app-alert">
    <h2>Alert</h2>
    <h3>Important message</h3>
    <div>This is an alert!</div>
    <button>OK</button>
</dialog>
```
Thats it. Nothing more but simple html. Surely you can make components as you wish:

```jsx
const Alert = (props) => {
  return (
    <dialog class="app-alert">
      <h2>Alert</h2>
      <h3>Important message</h3>
      <div>This is an alert!</div>
      <button>OK</button>
    </dialog>
  )
}
```
A nice side effect of this: You can easily add all your logic and additional styles yourself, as this libary is not a set of reserved components, no, *you have the power!*

### And with some logic-tweaks
**Appstyles** also provides some functions that are compatible to **Svelte Actions**, (of course they work with vanilla and every other framework aswell)
You will always need some JS to get the best out of it. May it be for animations or events, **Appstyles** provides basic functionality, but also only *when you want it*.

## TODO
- literally everything, as of now I need to add all the styles.
- Then I can go on with JS function
- Then I can make the CLI tool
- Then I can work out the details
