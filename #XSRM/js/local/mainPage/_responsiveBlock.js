class ResponsiveBlock {
  constructor(props) {
    this.$block = document.querySelector(props.block);
    this.$newParent = document.querySelector(props.newParent);
    this.$oldParent = document.querySelector(props.oldParent);
    this.windowWidth = props.windowWidth;

    this.togglePosition();
    this.windowEventHandler();
  }

  moveBlock(parent) {
    parent.appendChild(this.$block);
  }

  togglePosition() {
    if (window.innerWidth < this.windowWidth) {
      this.moveBlock(this.$newParent);
    } else {
      this.moveBlock(this.$oldParent);
    }
  }

  windowEventHandler() {
    window.addEventListener("resize", () => {
      this.togglePosition();
    });
  }
}

const responsiveBlock = new ResponsiveBlock({
  block: ".firstScreen__video",
  oldParent: ".firstScreen__videoWrapper_desktop",
  newParent: ".firstScreen__videoWrapper_mobile",
  windowWidth: "1025",
});
