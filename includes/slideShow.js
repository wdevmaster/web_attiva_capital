function getDisplayNumber(iNumber) {
   var sNumber = (iNumber <= 9) ? "0" + iNumber : "" + iNumber;
   return sNumber;
}

 function slideshow(objName, id)
{
  this.objName = objName;
  this.delay = 6000;
  this.current = 0;
  this.slides = [];
  this.timeout_id = 0;
  this.loop = 1;

  this.getElementById = function(id)
  {
    if (document.getElementById) {
      return document.getElementById(id);
    }
    else if (document.all) {
      return document.all[id];
    }
    else if (document.layers) {
      return document.layers[id];
    } else {
      return undefined;
    }
  }

  this.target = this.getElementById(id);
  this.target.style.display = "block";

  var count = 1;
  var s;
  while (s = this.getElementById(id + count)) {
    this.slides[count - 1] = s.innerHTML;
    s.style.display = "none";
    count++;
  }

  /* Methods */
  this.display = function()
  {
    if (!this.target) { return; }
    var dofilter = (this.target.filters && this.target.filters.length);
    if (dofilter) { this.target.filters[0].Apply(); }
    this.target.innerHTML = this.slides[this.current];
    if (dofilter) { this.target.filters[0].Play(); }
  }

  this.next = function()
  {
    this.stop();
    this.current++;
    if (this.current >= this.slides.length) {
      if (this.loop) {
	this.current = 0;
      } else {
	this.current--;
      }
    }
    this.display();
  }

  this.previous = function()
  {
    this.stop();
    this.current--;
    if (this.current < 0) {
      if (this.loop) {
	this.current = this.slides.length - 1;
      } else {
	this.current = 0;
      }
    }
    this.display();
  }

  this.play = function(next)
  {
    this.stop();
    if (next) {
      this.next();
    }
    this.timeout_id = setTimeout(this.objName + ".play(1)", this.delay);
  }

  this.stop = function()
  {
    if (this.timeout_id) {
      clearTimeout(this.timeout_id);
    }
    this.timeout_id = 0;
  }

  this.isPlaying = function()
  {
    return this.timeout_id;
  }
}

ss = new slideshow("ss","slide");
ss.display();
ss.play();