(function(){

  var prefixedTransform = xtag.prefix.js + 'Transform'
  var transformAttr = {
    attribute: {},
    set: function(){
      setDistance(this);
    }
  };

  function setDistance(cube){
    cube.style.transform = cube.style[prefixedTransform] = 'rotateX(' + (cube.getAttribute('rotate-x') || 0) + ')' +
                                                          ' rotateY(' + (cube.getAttribute('rotate-y') || 0) + ')' +
                                                          ' translateZ(' + (cube.getAttribute('distance') || 0) + ')';
  };

  xtag.register('x-cube', {
    content: function(){/*
        <div class="x-cube-face x-cube-front"></div>
        <div class="x-cube-face x-cube-back"></div>
        <div class="x-cube-face x-cube-left"></div>
        <div class="x-cube-face x-cube-right"></div>
        <div class="x-cube-face x-cube-top"></div>
        <div class="x-cube-face x-cube-bottom"></div>
    */},
    lifecycle: {
      created: function(){
        this.xtag.back = this.querySelector('.x-cube-back');
        this.xtag.left = this.querySelector('.x-cube-left');
        this.xtag.right = this.querySelector('.x-cube-right');
        this.xtag.top = this.querySelector('.x-cube-top');
        this.xtag.bottom = this.querySelector('.x-cube-bottom');
      }
    },
    accessors: {
      width: {
        attribute: {
          def: 1
        },
        set: function(val){
          this.style.width = val + 'em';
        }
      },
      height: {
        attribute: {
          def: 1
        },
        set: function(val){
          this.style.height = val + 'em';
        }
      },
      depth: {
        attribute: {
          def: 1
        },
        set: function(val){
          var ems = val + 'em';
          this.xtag.left.style.width = this.xtag.right.style.width = this.xtag.top.style.height = this.xtag.bottom.style.height = ems;
          this.xtag.back.style.transform = this.xtag.back.style[prefixedTransform] = 'translateZ(' + ems + ')';
        }
      },
      rotateX: transformAttr,
      rotateY: transformAttr,
      distance: transformAttr
    }
  });

})();
