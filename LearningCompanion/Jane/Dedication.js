(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/Dedication.mp3" || "sounds/Dedication.ogg", id:"Dedication"}
	]
};



// symbols:



(lib.gjanemouthside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"a, i":0,o:4,e:8,eh:12,u:16,"c k g j r s t h y z":20,"d l n t":24,"w q":28,oo:32,"m b p":36,"f v":40,"neutral smile":45});

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAJAWQASgGgogl");
	this.shape.setTransform(-6.3,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAmgUQgIgEgKABQgJABgUAQQgWAOgGAQ");
	this.shape_1.setTransform(1.3,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABLgxQhFAOgegJIgMAKQgEAGgUgDQgFgBgEgBQgDgBgEAAIABAJQABABABABQAGAFAKACQAHAAAHgBQAHgBAGgBQAIgCAHgCQAJgCAIgCQAFgCAFgBQAJgCAIgCQAKgDAJgDQAGgCAHgCQAHgCAHgDgABEgMIACgEQADgJACgIQABgIABgIIgCAAABEgMQgCAEgCADQgFAFgFAFQgHAFgIAEQgEADgFACQgFACgGACQgGACgGABQgHABgFABIgcgBIgDAFQgBADABAEQAAABAAABQADACAFAEQAGAEAMgCQAKgBAJgCQAJgBAHgDQAGgDAHgEQAIgFAFgGQAHgIAEgIQACgFACgDQABgGABgGg");
	this.shape_2.setTransform(-1.9,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C49162").s().p("AgbAvIgIgGIAAgCIAAgHIADgFIAcABIAMgCIAMgDIAKgEQAFgCAFgDQAIgEAHgFQAFgFAFgFIAEgHIgDAMIgDAIQgFAIgGAIQgGAGgHAFIgOAHQgGADgKABIgSADIgGABQgHAAgFgDgAhIgXIgCgCIgBgJIAHABIAIACQAUADAFgGIAMgKQAdAJBGgOIgOAFIgOAEIgSAGIgRAEIgLADIgQAEIgPAEIgNACIgPABQgJgCgGgFg");
	this.shape_3.setTransform(-2,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9B3141").s().p("AgJgGQAUgQAJgBQAKgBAIAEIgCAEIgEAHQgFAHgFADQgHAFgIAEQgEADgDACIgLAEIgMADIgOACQAGgQAWgOg");
	this.shape_4.setTransform(1.3,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#402424").s().p("AgqAmQASgGgrglIAPgBIANgCIAPgEIASgEIAJgDIARgEIASgGIAOgEIAOgFIABAAIgCAQIgEARQgIgEgKABQgJABgWAOQgUAQgGAQg");
	this.shape_5.setTransform(-1,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AAogOQgGgBgQgBQgPgBgDAAQgfACgHAdQgBACAAAC");
	this.shape_6.setTransform(0.2,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA2gWIgEgCIACABQgUgLg0gMQgIALgOABQgOABgIgGQgDAJABABQABADACACQAEAFAIACQABACAHADQAcAMgNANQgDADAAADQAAAFAPACIABAAQARACANgDQAagFAJgLQAIgIAFgHAA2gWIgBgBIgBAAAA1gXIACABQADABAFADQADACABABQABABgBgBIgBAAIAAABIAAABQgDAPgGAMQgHAPgIAGQgHAEgNAEQgKADgGAAQgGABgIAAQgIgBgEgBQgFgCgFgCQgGgDgDgGQgDgFALgIABDgPIgBAAAgzgRQgDgJA5ABQAjgBAQAE");
	this.shape_7.setTransform(-2.2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C49162").s().p("AgIAvIgMgCIgKgEQgGgDgCgGQgDgFALgIQgBAFAQACIAAAAQARACANgDQAbgFAIgLQAIgIAGgHIADgIIAAABQgDAPgGAMQgIAPgHAGQgHAEgNAEQgLADgGAAIgIABIgGAAgAg+gYIgEgFQgBgBADgJQAIAGAOgBQAOgBAJgLQAzAMAVALIgCgBIADACQgPgEgkABQg4gBADAJQgIgCgEgFg");
	this.shape_8.setTransform(-2.2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#402424").s().p("AgmAUQgBgDAEgDQAMgOgcgLQgGgEgBgCQgDgIA6AAQAigBAPAEIAAAAIABAAIAJAFIADACQABABgBAAIAAAAIAAgBIAAABIAAAAIgDAJQgGgCgQgBIgTAAQgeABgHAdIgBAEQgQgBABgFgAAugWIgDgBIACAAIABABIAAAAIAAAAgAAugWg");
	this.shape_9.setTransform(-1.4,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B3141").s().p("AgnARIABgDQAHgeAfgBIATAAQAPABAGACQgGAJgHAFQgJALgYAGQgIABgJAAIgQgBgAgnARIAAAAIABgDIgBADIAAAAg");
	this.shape_10.setTransform(0.2,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgMgLQABACAGADQATAIgBAK");
	this.shape_11.setTransform(-6.7,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AAggRIgSgBQgxAFAEAg");
	this.shape_12.setTransform(-0.3,3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA0gXQgSgHgiAEQg0AGAEAIQgHgDgDgGQgDgHACgGIATACQALgJAGgFQALABAYAHQAcAIAMAHgAA6gGQgLAVgmAGQgIACgEAAQgZADAGgKQABgDAAgCQgRAHAFAIQAFAJAHAGQAGAGAQgBQARgBAQgIQAQgJAIgiQABgBAAgCQABgCABgCQAAgCgDgEQgEgDgCgB");
	this.shape_13.setTransform(-3.1,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C49162").s().p("AgUApQgGgGgFgJQgFgIAQgHIgBAFQgGAKAagDIALgCQAmgGALgVQgIAigQAJQgQAIgRABIgCABQgOAAgGgGgAg5gVQgCgHABgGIATACIARgOQALABAZAHQAcAIALAHQgRgHgjAEQg0AGAEAIQgGgDgEgGg");
	this.shape_14.setTransform(-3.2,2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9B3141").s().p("AAOgSIASABIgBAEIgBADQgMAVgjAGIgOACQgEggAxgFg");
	this.shape_15.setTransform(-0.3,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#402424").s().p("AgcASIABgFQABgKgVgIQgGgCgBgDQgEgIA3gGQAggDARAGIAGAFQAEAEgBACIgSgCQgyAFAFAhIgJAAQgPAAAEgIg");
	this.shape_16.setTransform(-2.5,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#BE8552").ss(0.5,1,1).p("Ag9gfQgGgCgEgGQAIgBAIAAQAIABAIgCQAGgFAGgDQACAAABgBQAAAAAAAAQAIACAIABQAHABAFABQAHAAAZgCQAYgCAIAQQAFAFgCAKIAAAAQgCAHgBABQgQAkgXAGQgXAFgOgBQgHgBgHgCQACgDABgCQANgag3ghQAPABBAgJQAogGAKAMABHgSQAAgBABgCQgBACAAABQAAABAAAAQgMAhgIAKQgHALgMAFQgLAFgPADQgNACgKgEQgKgFgBgDQgBgDgBgCQgBgCACgEQADgDAEAB");
	this.shape_17.setTransform(-2.6,2.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C49162").s().p("AgQAwQgLgFgBgDIgCgFQgBgCADgEQADgDADABIAEABIgDAFQAGACAHABQAOABAXgFQAYgGAQgkIADgIIAAAAIAAABQgMAhgIAKQgIALgLAFQgMAFgPADIgIABQgIAAgGgDgAg8gfQgGgCgEgGIAPgBQAJABAHgCQAHgFAGgDIADgBIAAAAIAQADIAMACQAHAAAYgCQAYgCAIAQQgKgMgnAGQg6AJgSAAIgDgBg");
	this.shape_18.setTransform(-2.6,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#402424").s().p("AgNAnQgHgBgGgCIADgFQAMgZg2giQAOACBAgKQAogGAKAMQAFAFgCAKIAAAAIgDAIQgQAkgXAGQgTAEgLAAIgHAAg");
	this.shape_19.setTransform(-2.1,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABGgSQACAEAAAEQgCAIgDAEQgSAdg5AEQgMABgQgDIAAgOIAAgLQgBgJgigJQAzgWAfgCQAXgBASAFQAGACAEAD");
	this.shape_20.setTransform(-1.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABIgVQgBgBgBgBQgBgBgCgBQgBgCgCgBQgFgDgFgDQgQgKgOgBQgSAAgZABQgIAKgPADQgPADgFgBQgEAAgDAIQgDAHADACABEAAQgLAmgtAFQgrAGgHgHQgGgGgBgDQAAgKALgG");
	this.shape_21.setTransform(-1.5,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C49162").s().p("AgkAqQgGgGgBgDQAAgKALgGIAAANQAQADAMgBQA5gEARgcQgMAmgtAFQgSADgNAAQgPAAgDgEgAhEgVQADgIAFAAQAFABAPgDQAOgDAJgKIArgBQANABARAKIAAACQgSgGgYABQgeADgzAWQgEgCADgHg");
	this.shape_22.setTransform(-1.7,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#402424").s().p("AgkAhIAAgOIAAgLQgBgJgigJQAzgWAfgCQAXgBASAFIAKAFIADACIADADIACACQACAEAAAEQgCAIgDAEQgSAdg4AEIgGAAQgKAAgNgCg");
	this.shape_23.setTransform(-1.3,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgzgOQgEAAgCgCQAAAAgBgBQAAgBAAgBQgBgFADgFQAJgBAGgBQAFgBACAAQADgBALgLQAUADAFACQAGABANAAQANABAJASQABACACACQAEAFACAGQABAEABABQAFAQgHAFAgXAZQgDABgBACQgBAGADAGQABADADABQAMABAKAAQAMgBADAAQAFgBALgEQALgDAMgOQgEACgJgBQgNgCgQACQgOACgTAGQABgCAAgDQAAgDgBgEQgHghgYABQAAgBAAAAAAugTQgQgQgeADQgrAFgIAN");
	this.shape_24.setTransform(-2.3,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.5,1,1).p("AAWgKQgqAGgBAP");
	this.shape_25.setTransform(1.2,2.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C49162").s().p("AgTAsQgCgBgCgDQgDgGACgGQAAgCADgBIAFABIgBAFQARgGAPgCQAQgCANACQAJABAEgCQgMAOgLADIgPAFIgQABIgEAAIgSgBgAg3gQIAAgBIgBgCQAAgFADgFIAOgCIAIgBQACgBAMgLIAZAFIASABQANABAJASQgQgQggADQgpAFgIANIgBAAQgDAAgCgCg");
	this.shape_26.setTransform(-2.6,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9B3141").s().p("AAFALQgKgDgRADQABgPAqgGQAEAOgHAFQgDACgEAAIgGAAg");
	this.shape_27.setTransform(1.3,2.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#402424").s().p("AgVAcIgBgIQgIghgYABIABgBQAHgNArgFQAfgDAPAQIADAEQAEAFACAGIADAFQgsAGgBAQQgNACgTAGIABgEg");
	this.shape_28.setTransform(-2.1,1.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABMgfIABACQgFAagUAVQgSATgOAEQgXAHgVgFQgTgEgHgKIACgJQAlAEAkgIQAMgDAQgNQAQgNAIgQAhAgTQgGgFgCgCQgCgCgCgIQATAFATAEIAOgJQAKgJAEABQADABAMABQAKAAA9AIQhOATg+gEg");
	this.shape_29.setTransform(-1.1,2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("ABGgbIAAADAgxAHQgEgHgRgMAg2AcQAGgHABgJQgBgCgBgDABHgWQgoAbhQAC");
	this.shape_30.setTransform(-0.5,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C49162").s().p("AgYArQgTgEgHgKIACgJQAlAEAkgIQAMgDAQgNQAQgNAIgQQgFAagUAVQgSATgOAEQgPAEgLAAQgKAAgIgCgAhAgTIgIgHQgCgCgCgIIAmAJIAOgJQAKgJAEABIAPACIBHAIQhDAQg1AAIgUgBg");
	this.shape_31.setTransform(-1.1,2.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2AbQAGgHAAgJIgBgEQBQgDAogbQgIAQgQANQgQAOgMACQgYAGgZAAIgYgBgAhGgMQA+ADBOgSIAAACIABACQgoAbhQADQgEgHgRgMgABHgXIAAAAg");
	this.shape_32.setTransform(-0.5,1.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABMgUQgZgVhyAeQgJAAgBgDQgBgEgCgIQASAGAIgFQAJgEAJgGQAmgBATABQAUABALAEQALAFAEABQAEABABABABNgUQgJAUgaAMQgaAMgHADQgIADgJACQgMACgFgBQgGgBgFACQgEACgGAAQgDAAgEgBQgEgCgCgBQgBAAAAgCQgBgBgBgCQgBgEAHgFQAWgCAigGQAjgFASgIQASgJAGgIg");
	this.shape_33.setTransform(-0.9,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("ABGgRQgBgCAAgBIAAABIABACgAg/AVIAAAAQAAgHAAgIIAAgBQARgEAqgEQAsgFAegJAhFgJQAGAJAAAF");
	this.shape_34.setTransform(-0.2,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C49162").s().p("AguAkIgHgBIgGgDIgCgCIgBgDQAAgEAGgFIA4gIQAjgFASgIQASgJAGgIQgJAUgaAMQgaAMgHADIgRAFQgMACgFgBQgGgBgEACQgFACgGAAIAAAAgAhJgOIgDgMQASAGAIgFIASgKQAmgBATABQAUABALAEIAPAGQAEABAAABIAAAAIABACQgZgVhxAeIgCAAQgIAAgBgDg");
	this.shape_35.setTransform(-0.9,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag/AYIAAgPIAAAAQARgFAqgEQAsgFAegJQgeAJgsAFQgqAEgRAFQAAgHgGgHQBxgeAaAVIAAAAQgGAHgSAIQgRAJgiAGIg6AIg");
	this.shape_36.setTransform(-0.2,0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA4gTQgCAAgCgBQgSgBgDgBIgBABQgggBgXADQgPACgXAFIgGgEIgEgKQAQAHAJgGQARgJAIABQAMAAAiAFQAqAGAJAGQgKgCgIgBgAg6AQQA1gHAWgBQAZAAAPgLQAEgDACgEQAHgFAEAAQgJAPgIAHQgOAQgXABQg1ACgIACQgIABgIAGQgCgBgBgCQgCgGgBgIQgBgEAHAA");
	this.shape_37.setTransform(0,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,1,1).p("Ag4gDQADAHgDAJIgBACAg/gOQAFAGACAFABAgLIh4AI");
	this.shape_38.setTransform(-0.1,1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C49162").s().p("Ag8AgQgCgGgBgIQgBgEAHAAIgBACQA1gHAWgBQAZAAAPgLIAGgHQAHgFAEAAQgJAPgIAHQgOAQgXABQg1ACgIACQgIABgIAGQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAgAhFgQIgEgKQAQAHAJgGQARgJAIABQAMAAAiAFQAqAGAJAGIgSgDIgEgBIgVgCIgBABQgggBgXADQgPACgXAFg");
	this.shape_39.setTransform(0,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag8ASQAEgKgDgIIB4gGIgGAGQgPALgaAAQgVABg1AHgAg8gEQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIANgBIASgDIADABIACgBIAEAAQADgCAHAAIAIgBIACAAIABAAIAGABIAAAAIAHgBIANgBIABAAIAVACIAEAAIADACIACgBQAEAAABADIgCADIgFACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgHABIgIgBQgCADgKAAQgFABgDgCIAAABQgLACgLAAIgJgBIgGABIgMACIgDAAIgJABQgPgBgDgCg");
	this.shape_40.setTransform(0.3,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABBgfQgJgCgVABQgaABgeACQgeACgLAFIgHgFQgCgFADgIQAPADAKAAQALABAUgJQAHAEARABQATABANADQAOADAHACQADABABABQADACgDAIQgBAEgDAFQgCAFgEAFIgBAAIABAAQABgCAGgKQgBABAAABQgVA4gsgBQgtAAgCgEQgBgEABgFQAAgDAGgCIABAGQBCADAPgRQADgDAMgQQAAAAABAAQAEgFAFgH");
	this.shape_41.setTransform(-1.8,2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AAsgDIgBAAQgBAAAAAAQgvgIgUAGQgQAFgCAJ");
	this.shape_42.setTransform(-0.2,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.5,1,1).p("AgsAZIAAgEQAAgFgCgGQAIAAAIAAQAygBAhgJQABgBACAAAg/gVIgCgDIgBAAQACACABABgABDgVQg+AFg8AGQgDgGgFgF");
	this.shape_43.setTransform(-1.5,2.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C49162").s().p("AACAtQgsAAgCgEQgBgEABgFQAAgDAGgCIABAHQBCACAPgRIAPgTIACAAIABAAIAGgKQgVA3gtABIAAgBgAhCgaQgCgGADgIQAPADAKABQALAAAUgIQAHADARABQATABANADIAVAFQgJgCgVABIg4ADQgeACgLAFg");
	this.shape_44.setTransform(-2.1,2.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9B3141").s().p("AgZgFQAUgGAvAIIABAAIAAAAIgDABIACgBIgCABQghAKgxABQABgJAQgFgAAogCIAAAAg");
	this.shape_45.setTransform(-0.3,2.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#402424").s().p("AgzAQQgCgLgHgJIB5gLIgEAJIAAgCIgIALIAIgLIgHALIgBAAQgxgGgSAEQgQAFgBAKIgIAAIgIAAgAAyADIAHgLIAAACIgGAJgAA5gIIAAAAg");
	this.shape_46.setTransform(-1,1.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgrAhIgBgGIgBgEIgBgLIAPAAQAygBAhgLIgPATQgNAPg0AAIgPgBgAA3AAIAAAAIAAAAgAhAgTIgCgDQALgFAfgCIA4gDQAUgBAJACIAFACQADACgDAIIh5ALIgJgLgAhCgWIAAAAIACADIgCgDg");
	this.shape_47.setTransform(-1.4,2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABDgCIAAAAQgDgEgIgEQAAgBgKgFQgKgHgUgDQg7gKgOAPQgGgCgBgDQgCgDAAgDQAJgBAJgBIAPgIQATAAAPAFQA9ATAFAQQAAAAAAABIAAABIAAAAQgKARgOALQgPAMgPAAQgcABgGAAQgGAAgGACQgGABgEgDQgEgDAAAAQgBgBAAgCQgCgEABgFQABgEAFgBQAAADgBADQAmABATgEQAggHAWgR");
	this.shape_48.setTransform(-1.4,1.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.5,1,1).p("AA+AAIAAgBQgvACgXACIgMAAQAQgQAQACIAoABAAqgQQgPgBgmAEQgfACgMAEIgHgNIAAgBAgvAWQAAgFgDgDQgDgEAEgEQABgBAIgBQAMgBAIAA");
	this.shape_49.setTransform(-1,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C49162").s().p("AgrApIgEgDIgBgDQgBgEAAgFQABgEAFgBIgBAGQAnABASgEQAggHAWgRIAAAAQgKARgOALQgPAMgPAAIgiABQgGAAgGACIgDAAQgEAAgDgCgAA4gKIgKgGQgKgHgUgDQg7gKgOAPQgGgCgBgDQgCgDAAgDIASgCIAPgIQATAAAPAFQA+ATAEAQIgBAAQgCgEgIgEg");
	this.shape_50.setTransform(-1.4,1.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#402424").s().p("Ag1gBQANgEAegDQAngEAOACIAKAGIgogBQgQgCgQAPIgTABQgJABgBABQAFgLgKgBg");
	this.shape_51.setTransform(-1.1,1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgxAdIABgGQAAgFgCgDQgEgEAEgEQACgBAIgBIAUgBIAMAAIBGgEIAAAAIABAAQgWATggAHQgRADggAAIgJAAgAg9gTIAAAAQAOgPA6AKQAUADALAHQgPgCgmAEQgfADgMAEg");
	this.shape_52.setTransform(-1,1.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9B3141").s().p("AgHgGIAmABQAIAEACACIhGAGIgMAAQAQgPASACg");
	this.shape_53.setTransform(1.1,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAuglQAAAAgBAAQg1ACgNAJQgTAMgRAAQgBAAgBAAQAAgBgBAAQgBgBgCgDQAAgBgBgBQgCgDAAgEQANAHAFgDQAFgDAOgMQAVgGAVAAQABgBAQADQABAAACAAIABAAQAVADAMACQgLAAgKABgAA0gbQABgBAAAAQAHgGAHgCQgFAEgLAgQgJAYgOAAQggAAgNANQgIAIgPABQgLgIAJgJQAJgLAQgFQAQgFATABQAGAAANgSQAHgLAIgHg");
	this.shape_54.setTransform(-1.7,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.5,1,1).p("AgoACIAAABIBYgjIAAgBAgnAiQABgKACgEIBbgrIABgBAg2gKQAKAFAEAHAg4gKQALAFAFAH");
	this.shape_55.setTransform(-2,-0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C49162").s().p("AgqAdQAKgLAPgFQARgFASABQAGAAAMgSQAIgLAIgHIABgBIAAAAQAHgGAHgCQgEAEgMAgQgJAYgOAAQgfAAgOANQgIAIgOABQgMgIAJgJgAg7gOIgBgBIgDgEIgBgCQgCgDAAgEQANAHAGgDQAFgDAOgMQAUgGAVAAIASACIAHACIgEgCIAAAAIAhAFIgVABIgBAAIAAAAQg0ACgNAJQgUAMgRAAIgCAAg");
	this.shape_56.setTransform(-1.7,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgkAYIBbgrQgIAHgIAMQgMASgGAAQgUgCgPAFQgPAFgKAMQABgKACgEgAgoAGQgEgHgKgFQARAAAUgMQANgIA0gCIhYAjgAAigjIADABIAEACIgHgDgAAigjIgGgCIAAAAIAHACIACABIgDgBg");
	this.shape_57.setTransform(-2,-0.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#402424").s().p("AgwAKIBYgjIAAgBIABABIgBAAIABAAIAHAIIAAAAIgBABIABgBIgBABIhbArQgBgKgDgHg");
	this.shape_58.setTransform(-1.2,-0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA1gfQgRgDgNgCQgogHgFAFQgIAHgJAAQgJAAgDAAQgEAGAIAEIAAAAAgeAKQAIgQgEgFQgCgCgSgIIATgFQANAAAdgGIAmABQgBAPgEALIgBAFQgEAJgJAOQgJAOgVADQgTADgMgFQgMgEgBgJQAAgKAKgFQgBAFgDAFQAcAIAagFQABAAACAAQAQgFAIgS");
	this.shape_59.setTransform(-2.9,2.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.5,1,1).p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(-7.7,0.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C49162").s().p("AgbAmQgMgEgBgJQAAgKAKgFIgEAKQAcAIAagFIADAAQAQgFAIgSQgEAJgJAOQgJAOgVADIgNABQgLAAgHgDgAgvgVIAAAAQgIgEAEgGIAMAAQAJAAAIgHQAFgFAoAHIAeAFIgmgBQgdAGgNAAIgTAFg");
	this.shape_61.setTransform(-2.9,2.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#402424").s().p("AglAXIAEgJQAIgQgEgFQgCgCgSgIIASgFQANAAAdgGIAnABQgBAPgEALIgCADQgHAUgQAEIgDABQgKACgIAAQgSAAgSgGg");
	this.shape_62.setTransform(-2.6,2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAvgIQgLgZgdACQghAEgMgBQgBAAgBAAQgCgBgBAAQgBABgBAAQgFgDgCgFQAAgBAAgBQAAgBgBgBIABAAIAXAEIAQgJQAaAAAUAPQAGAFAEAIQADAEABAFIADAFQADAHABAMIAAAJQgQAKgYAFQgWAFgMABQgMABAAgFQgDgMALgIQgBAFgCAFQATgVA+AF");
	this.shape_63.setTransform(-3.6,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.5,1,1).p("AACAAIgDAA");
	this.shape_64.setTransform(-8,-1.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C49162").s().p("AghAqQgCgMALgIIgDAKQATgVA+AFIAAAJQgQAKgYAFQgWAFgMABIgDAAQgJAAgBgEgAAHgfQghAEgMgBIgDAAIgCgBIgCABQgFgDgCgFIgBgCIAAgCIABAAIAXAEIAPgJQAaAAAVAPQAGAFAEAIIAEAJQgLgZgdACg");
	this.shape_65.setTransform(-3.6,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#402424").s().p("AgfAXQAEgPgDgPQgDgSgNgDQANABAhgDQAdgDALAZIACAFQADAHACANQg/gFgTAUIAEgJg");
	this.shape_66.setTransform(-2.9,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgwAUIAAgKQACgMgMgJQgBAAgBgBQAEgGAvgBQAJgBAbADQAeADAEAD");
	this.shape_67.setTransform(-1.7,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABCgNQgEgEgZgGQgUgFgLgCQgUgEgHgCQgNAIgTADQgGAAgGABQAEAFAFAFQABABABAAABCgNIghAIIgrAMQgXAFgIALQgBABAAAAIAAAAIAAgHQgBABgBAAQgDAFAAAHQADANAOgLQAKgHAWACQAKAAAWgSQAbgUAFgCg");
	this.shape_68.setTransform(-2.2,1.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C49162").s().p("AgvAeQAAgHAEgFIABgBIAAAHIAAAAIABgBQAIgLAXgFIArgMIAhgIQgFACgbAUQgWASgKAAQgWgCgKAHQgGAFgEAAQgFAAgCgHgAAggUQgbgCgJAAQgvABgEAHIACABIgDgBIgJgKIAMgBQATgDANgIQAHACAUAEIAfAHQAZAGAEAEQgEgEgegDg");
	this.shape_69.setTransform(-2.2,1.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#402424").s().p("AgvAQIgBACIAAgBIAAgKQACgNgMgIIgCgBQAFgGAugBQAJgBAbADQAeADAEADIgSAEIgPAFIgqALQgXAFgJALIgBABg");
	this.shape_70.setTransform(-1.7,1.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAZgCQAAAAAAgBQAEgFADgFIADgHIAAAAQgXgDgdgEAAZgCQAAAAgBABQAAABgHAGQgBABgBABQgBABgCACQgHAEgQAEAgDAcQAFgGAHgFQAEgEAEgFQAEgGAEgEAAfgUQgZgCgogB");
	this.shape_71.setTransform(3.2,1.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAwAPQgQADgXACQgVAGgLgHIAAAAIgGACIgBAJQACAGAGADQABAAACABQAPABAMgBQAIAAALgEQALgEAIgDQAIgDADgCAAagaQgogBgdAHIAAAAIAAAAQgGAAgCgDQgEgDgBgKQAdAMAegQQAJAGAfAE");
	this.shape_72.setTransform(-3,1.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.5,1,1).p("ABGgVQgCAAgCAAQgWAEgVADQgXACgXACIgoACIgGgJIAAAAAgPAFQACgCABgCQAMgLAXgBQADgBAEABIAfAIQgRADgWACQgSACgTABQgCAAgCABIghACIACAO");
	this.shape_73.setTransform(-0.3,1.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C49162").s().p("AgnAoIgDgCQgGgDgCgFIABgJIAGgCIAAAAQALAHAXgGIAmgEQARgEAIgEIADgDIABgCIAIgIIABgBIgIALIgIAJIgOALIgLAEIgTAHQgJAEgIAAIgOAAIgPAAgAg/gTIAAgBQgFAAgDgDQgEgDgBgKQAdAMAggQQAJAGAdAEIA2AHIgEAAQgZgCgqgBQgogBgcAIIgBgBIABABg");
	this.shape_74.setTransform(-1,1.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9B3141").s().p("AgiAFQANgLAVgCIAHAAIAfAIQgRADgVADIglADIADgEg");
	this.shape_75.setTransform(1.9,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgvAWIgBgBIgCgOIAhgCIAEAAIAlgDQAWgCARgEIAAABIgBABIgIAHIgBACIgEADQgHAEgSAEIgmAEQgLADgIAAQgJAAgFgDgAhDgRQAcgIAoABQAqABAZACIgsAGIgtAEIgoACg");
	this.shape_76.setTransform(-0.5,1.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#402424").s().p("AhCgBIAngCIAugFIAsgGIAEAAIAAAAIgDAIIgHAIIgfgGIgHAAQgVABgNALIgDAEIgFABIggACg");
	this.shape_77.setTransform(0,0.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA4gVQABABAAAAQAFACADADQABAAABABQAFADADACQAAABABABQABACgEACQgBABgDACQgFAAgKAEQgKADgOADQgwAOgngGQAAgDAAgCQgPAHAMAMQAHACAGABQAjAFAegJQAhgJASgWAA4gVQhagFghALIABAAQgBAAAAAAQgGgEgCgFIAAgBQABAAAAgBQAKgCAJACQAMgHAMgDQAbAEAUADQAWADASAFgABDgOQAEADAFAE");
	this.shape_78.setTransform(-0.6,1.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.5,1,1).p("ABBACIiBAIAA5gJIh3AI");
	this.shape_79.setTransform(0.2,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.5,1,1).p("AADAOQAAAAAAgBQAAgEABgDAAFgGQgFgBgEgG");
	this.shape_80.setTransform(-6.7,1.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C49162").s().p("AgsAjIgMgDQgNgMAQgHIgBAFQAnAGAwgOIAYgGIAPgEQgRAWgiAJQgUAGgUAAQgMAAgNgCgAg/gPQgHgEgCgFIAAgBIACgBQAJgCAJACQAMgHANgDIAuAHQAWADATAFQhagFghALg");
	this.shape_81.setTransform(-0.9,1.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag8AUIAAgFIAAgBIABgIICBgHIgEABIgPAGIgYAGQghAKgdAAQgNAAgMgCgAhFgNIAAAAQAggLBaAFIABABIAJAFIh4AHQgGgBgGgGg");
	this.shape_82.setTransform(-0.3,1.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#402424").s().p("AhAgBIB4gIIACABIAHAGIABABQABABAAAAQAAAAgBAAQAAAAgBAAQAAABgBABIiCAIQAFgHgDgEgABCgBIgIgHIAIAHg");
	this.shape_83.setTransform(0.4,1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABMgVIgRASQgWAUgTADQgSADgWgBQgNgBgWgCIgCgHQgHACAEAKIAEAGIAAABQAGAFAIABIAgABQAIABAQgCQAYgBAJgFQADgCAYgoIAFgJIADgDABOgYQgCgBgUgBQgagCgXgEQgRgBgUgEIgPAIQgFACgWgIQgEAAgCADQgCACACAJQACAGAHAFIgJgMQAZAJAcgLIBaAEQALgDADAA");
	this.shape_84.setTransform(-0.7,1.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(0.5,1,1).p("ABIgPIADgCIgBAAIAAAAAhKgEQAAAAAAABIACACIAEAAIAygBQAkgCAUAAQAEAAATgKAA2ACIh4AHIADAJ");
	this.shape_85.setTransform(-0.3,0.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C49162").s().p("AgMAmIgggBQgIgBgGgFIAAgBIgEgGQgEgKAHgCIACAHIAjADQAWABASgDQATgDAWgUIARgSIAEgCIgDADIgFAJQgYAogDACQgJAFgYABIgQABIgIAAgAhOgVQgCgJACgCQACgDAEAAQAWAIAFgCIAPgIQAUAEARABQAXAEAaACQAUABACABIABABIgOADIhagEQgcALgZgJIAJAMQgHgFgCgGg");
	this.shape_86.setTransform(-0.7,1.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgPAXIgjgCIgCgIIgDgJIB5gFQgWAUgUACQgNACgPAAIgLAAgAg8gGIgDgCIAAgBIgIgMQAZAJAcgKIBaADQgSAKgFAAIg3ACIgzABg");
	this.shape_87.setTransform(-1.4,1.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#402424").s().p("AhHABIAygBIA3AAQAFAAASgJIAOgDIABAAIgEACIgRAQIh4AHIgCgMg");
	this.shape_88.setTransform(0.1,0.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#BE8552").ss(0.5,1,1).p("ABLgXQABABABAAQAEANgFAJQgLAagZAJQgYAJgQgBQgQAAgQACQgRACACgJQABgJABADQA2ABAngNQAWgIAGgMABJgYQABABABAAAhDgTQgLgBAAgSIAaAIQATgGAGgIQAMABAUACQAXABAOAFQAOAFAQAGQgYgIgtABQgwADgWAJg");
	this.shape_89.setTransform(-0.5,1.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(0.5,1,1).p("AAugZQANAAAOgBABGgbIABABABEgcIABABAgyAdQAAgPAAgHIAEgCQANgBAMgBQgLgEgNgPQgFABgIACIgOgKAAugCQAEgNAAAAQgBgDgDgHABIgDQgNABgNAAAgVADQAbgDAogCAgtgQQAmgHA1gC");
	this.shape_90.setTransform(-0.1,2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C49162").s().p("AguAmQACgJAAADQA2ABAngNQAWgIAGgMQgLAagZAJQgYAJgRgBQgPAAgQACIgFAAQgLAAABgHgAhNgmIAaAIQATgGAHgIIAfADQAXABAOAFIAeALQgYgIgtABQgwADgWAJQgLgBAAgSg");
	this.shape_91.setTransform(-0.7,1.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgyAgIgBgWIAFgCIAZgCIBDgGIAaAAQgGAMgXAIQgjAMgxAAIgJAAgAhIgTQAWgKAygCQArgCAYAJIACAAIABABIABAAIACABIgbABQg1ABgmAHIgNAEg");
	this.shape_92.setTransform(-0.1,1.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#402424").s().p("AhBgCIAMgEQANANALAGIgZACIgEACQgCgOgFgFgAAqgFIgEgKIAbgBQADANgEAIIgaACIAEgMg");
	this.shape_93.setTransform(0.7,1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9B3141").s().p("AgvgEQAngHA1gCIADAKIgEALIhCAGQgLgFgOgNg");
	this.shape_94.setTransform(0.1,0.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA8gWIgCgBQgHgEgJgBQhEgHgrAMIgBAAAhHgXQgGgEgCgLIAAgBQABgBACABIAFAAIALADQAAABAAgBQAGgCAEgFQACgDAEgBIABgBIABAAIBDAKQATADAQANIAJAJQAHAGAEAHIgDAAIgGAGIgHAGQgOAJgJAEIgCAAQgHADgIABQgTABg5ABQgDARAPgCQAQgCAXAEQATADAYgNQAQgIAMgQIAHgKIABgCIACgCIAAAAIAAgBIAAAAIAAABIAAAA");
	this.shape_95.setTransform(-1.5,0.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(0.5,1,1).p("AA2gPIAPABABGADIgGAAQgDgIgHgKQg4gDgrAHAhFgaIAFAHQADAFACAGQAKgCAEgBAg0AbIAAgNQAGgFAWgDQgRgHgEgKABAADQg7AAgdAD");
	this.shape_96.setTransform(-1.4,0.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C49162").s().p("AgCAwQgWgEgQACQgPACADgRIBMgCQAIgBAHgDIACAAQAJgEANgJIAHgGIAHgGIACAAIAAgBIABAAIAAABIgBAAIAAAAIAAAAIgBACIgBACIgIAKQgMAQgPAIQgUALgRAAIgHgBgAA6gXQgIgEgIgBQhEgHgqAMIgCAAIgBAAQgFgEgDgLIAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAFAAIAKADQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAFgCAFgFQACgDADgBIABgBIABAAIBCAKQAUADAQANg");
	this.shape_97.setTransform(-1.5,0.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Ag4ARQAFgEAXgDQAcgDA8AAIAFAAIgHAGQgNAJgJAEIgEAAQgTADhFACgABAgKIgPgBQg4gDgqAHIgOADIgFgLIgFgHQAqgMBEAHQAIABAIAEIACABIAJAJQAGAGAEAGIgCABQgEgHgEgEg");
	this.shape_98.setTransform(-1,0.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#402424").s().p("AhEgHIAPgCQAEAJAQAIQgWACgGAFQAJgPgQgHgAA3AFQgEgJgGgKIAPABQADAEAEAJIgGAFgABFAAIAAABIgCABg");
	this.shape_99.setTransform(-0.5,0.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9B3141").s().p("Ag2gFQAqgIA4ADQAHAKAEAJQg6AAgeADQgRgKgEgHg");
	this.shape_100.setTransform(-0.5,0.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#BE8552").ss(0.5,1,1).p("Ag8gMQgGgEgBgHQgBgIADgEIAUAEQAGgEAEgCQAFgEAFAAQANgBAQAHQAVAHADABQAGABAWAIQAMAEAAABQgEASgLAQQgPAVgSgBQgSgBgUACQgbACgHgJQgEgFACgGIATAAQANACANgBQANgCAHAAQAYgCAJgJQAIgIAFgFQAEgGAGgFIgRgEIgCAAIgBAAQgHgDgHgBQgJgBgGgBQgmgGgoAQg");
	this.shape_101.setTransform(-2.5,1.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(0.5,1,1).p("AA2gIIgXADIgDAAIgTADQgfACgIADIgSAGIgFgM");
	this.shape_102.setTransform(-3.2,0.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C49162").s().p("Ag0AjQgEgFACgGIATAAQANACANgBIAUgCQAYgCAJgJQAIgIAFgFIAKgLIgRgEIgCAAIADAAQAEgBABAAQACAAgBAAQAAAAgDAAQgDAAgEABQgHgDgHgBIgPgCQgmgGgoAQQgGgEgBgHQgBgIADgEIAUAEIAKgGQAFgEAFAAQANgBAQAHIAYAIQAGABAWAIIAMAFQgEASgLAQQgPAVgSgBQgSgBgUACIgKAAQgSAAgGgHg");
	this.shape_103.setTransform(-2.5,1.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("Ag1AAQAogQAmAHIAPACQAHABAHACIgXADIgDAAIgTABQgfAEgIADIgSAFg");
	this.shape_104.setTransform(-3.2,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#402424").s().p("Ag8AUQACgEAAgHQAAgHgCgEIASgFQAHgDAhgEIASgDIADAAIAWgDIACAAIABABIARADIgJALQgFAFgJAIIgCgKQgBgJgEgGIgCAAIgBAAIgeAGQgdADgLADIgBAAIAAABIACAZg");
	this.shape_105.setTransform(-2,1.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9B3141").s().p("AgmATIgCgZIAAAAIABAAQALgDAcgEIAegGIACAAIACABQAEAFABAJIACALQgJAJgYACIgTACIgLAAIgQgBg");
	this.shape_106.setTransform(-2.2,1.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAtgTQABAAABAAIAAAAQgBAAgBAAQgigEgfgEQgPgBAGALQgNgEgCgIQgDgIACAAIABAAIAQACIARgDQAXAMAhAHgAgQAKIgIAGQgBAMAJAHQADACADACQAKACAHgGQAKgIANgDIAGgSQAGgIAFgRAgQAKQgBAFgBAEQAEgFAJgBQAJgBAPAGQAJAEAIgQAgdgRQACACABACQALANgBAK");
	this.shape_107.setTransform(-3.8,1.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C49162").s().p("AgJAnIgGgEQgJgHABgMIAIgGIgCAJQAEgFAJgBQAJgBAPAGQAJAEAIgQIgGASQgNADgKAIQgGAEgGAAIgFAAgAgrgdQgDgIACAAIABAAIAQACIARgDQAXAMAhAHIhBgIQgPgBAGALQgNgEgCgIg");
	this.shape_108.setTransform(-3.9,1.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#402424").s().p("AgYAPQABgMgKgLIgDgEQgGgMAOABIBBAIIACABIgCgBIACABIAAAAQgFAPgFAKQgJAPgJgDQgNgGgLABQgJABgEAFIACgJg");
	this.shape_109.setTransform(-3,1.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgkgUIAFAAQAUABAGAVQACAJgGAFAAvgJQgMgGgBgBQgYgHgOgDQgRgEgPAKQgDAAgBAAQgBgBgCgCQgCgBgCgIIAUAAIAAAAIAIgJQAhABAhAfIAAAAQACADgCAEQgBACgDAAQgZAPgNAAQgHAAgHABQgFADgEADQgCABgBACQAAANAKAEQABAAABAAQAIgDADgCQAFgEAGgCQAMgGAHgGQAHgGADgFQACgEABgBQAAgCACgD");
	this.shape_110.setTransform(-2.8,1.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C49162").s().p("AgLAqQgKgEABgNIACgDIAKgGIAOgBQANAAAYgPIAFgCIgDAFIgDAGQgCAEgHAGQgIAGgLAGIgMAGIgKAFIgDAAgAAigPQgXgIgPgDQgRgEgPAKIgDAAIgDgCQgCgCgDgIIAVAAIAAAAIAIgJQAgABAhAfIAAAAIgNgGg");
	this.shape_111.setTransform(-2.8,1.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#402424").s().p("AgLAIQgGgVgUgBIgFAAQAPgKARAEQAPADAXAHIANAHQADADgCACIgFAEQgYAPgNAAIgOABQAFgFgCgJg");
	this.shape_112.setTransform(-2.2,1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgrgNQgFAAgBgDQgCgFgBgFIAOABIAPgJQAKAFAJACQAIADATAFQASAEALAQQABABAAABQgOAOgJAAQgJAAgEABQgEABgEABQgJABgHAFQgDADgDACQgDACgEABQgFADgFgEQgCgCgBgCQgDgFABgGQAAgCABgDQAMgGAfgCQAigCAKAAAgiANQAOgNgPgHQgHgDgBgDQgBgDAJgCQAPgDAgAGQAgAHAIAJ");
	this.shape_113.setTransform(-3.3,0.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C49162").s().p("AgeAhIgDgEQgDgFABgGIABgFQAMgGAggCIArgCQgOAOgJAAIgMABIgIACQgKABgHAFIgGAFIgHADIgEABQgDAAgDgCgAAMgPQgggGgPADQgJACABADQgFAAgBgDQgCgFgBgFIAOABIAPgJIATAHIAbAIQASAEALAQQgIgJgggHg");
	this.shape_114.setTransform(-3.3,0.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#402424").s().p("AgogDQgGgEgBgCQgBgEAIgCQAPgDAhAHQAgAGAHAKIABACIgrACQgfABgNAHQAOgOgPgGg");
	this.shape_115.setTransform(-2.9,0.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#BE8552").ss(0.5,1,1).p("AgkgVQgFABgCgFQgCgGAAgHQADABADAAQAHADAIABIAJgJIAsAKQAIABAIACAAsgIQAAAAAAgBQgFAXgMAJQgMAJgDACQgDADgIAEQgDACgGAAQgCAAgCgBQgBAAgCgCQgFgEgBgGQgCgKAGgJQABAGAAADQAMAKAWgTQAYgRACgCgAgRALQAAgIAAgLQAAgJgTgEQAigEAvgEQACAMgDAJ");
	this.shape_116.setTransform(-4,2.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C49162").s().p("AgHArIgEgBIgDgCQgFgEgBgGQgCgKAGgJIABAJQAMAKAWgTIAZgTIABAAIAAgBQgFAXgMAJIgQALIgLAHQgCACgEAAIgCAAgAgqgZQgCgGAAgHQACABADAAQAIADAIABIAIgJIAtAKIAPADQguAEgjAEIgBAAQgEAAgBgEg");
	this.shape_117.setTransform(-4,2.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#402424").s().p("AgUAYIgBgKIAAgTQAAgJgUgEQAjgEAugEQADAMgDAJIAAABIgaASQgOANgKAAQgGAAgEgDg");
	this.shape_118.setTransform(-3.6,2.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#BE8552").ss(0.5,1,1).p("AA0gIQgGgGgIgFQgGgFgIgEQgLgDgKgEQgEgDgGgDIgPAKIgdgFQACAGADACQAEACAFADQAFADABACIAFgGQAugFAgAVQAAADgCABIAAABQgYAWgoAFQADgGABgFQAEgSgZgNAAygEQgUAfgFAEQgHAFgCACIgUAEQgMAAgHgFQgCgCAAgCQAAgCAAgCQgBgGACgCQABgCACgDQABgBAKgC");
	this.shape_119.setTransform(-4.2,2.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C49162").s().p("AgXAlQgCgCAAgCIAAgEQgBgGACgCIADgEQABgCAKgCQgBAFgDAGQAogFAYgWIAAgBQgUAfgFAEIgJAHIgUAEQgMAAgHgFgAgagYIgFAGIgGgFIgJgFQgDgCgCgGIAdAFIAPgKIAKAGIAVAHQAIAEAGAFQAIAFAGAGQgggVguAFg");
	this.shape_120.setTransform(-4.2,2.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#402424").s().p("AgUAOQAEgSgZgNIAFgGQAugFAgAVIgDAEIAAABQgXAWgpAFQAEgGABgFg");
	this.shape_121.setTransform(-3.1,2.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BE8552").ss(0.5,1,1).p("AACgDQgCADgBAE");
	this.shape_122.setTransform(-4.9,4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAngLQgFgFgGgEQgFgEgEgDQgGgEgGgDQgHgDgIgDQgDACgCABQgEACgEACQgBACgCACIgQAAIAAABQAEAGAHAEQACACAJAAQgFgDgHgCQASgFAQAAQARAAASAPQAEASgGAIQgEAHgIAEQgXAPgQgBQgJgBAAgCQgCgSAQgHQAJgSgSgKAgPAVQAFgCAXgBQAZgBABgc");
	this.shape_123.setTransform(-3.5,2.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C49162").s().p("AgOAoQgJgBAAgCQgCgSAQgHIgGAJQAFgCAXgBQAZgBABgcQAEASgGAIQgEAHgIAEQgWAPgQAAIgBgBgAAEgaQgQAAgSAFIAMAFQgJAAgCgCQgHgEgEgGIAAgBIAQAAIADgEIAIgEIAFgDIAPAGIAMAHIAJAHIALAJQgSgPgRAAg");
	this.shape_124.setTransform(-3.5,2.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#402424").s().p("AgNAPQAJgSgSgKIgMgFQASgFAQAAQARAAASAPQgBAcgZABQgXABgFACIAGgJg");
	this.shape_125.setTransform(-3.1,2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BE8552").ss(1,1,1).p("ABGgWQgRACgRADQgJAAgTAAQgQABgUgDQgKABgCAHQgNgCgNgHQgIAMANAGQAAACAdAAQAdAAAZgHQAMgDALgEIAZgIQgSAMgHAFQgHAEgTAIQgSAKgXAEQgZAFgKgHQgKgIAGgN");
	this.shape_126.setTransform(-1.2,1.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C9996D").s().p("Ag5ATQgKgIAGgNIAAAAQAAACAbAAIABAAIABAAIAAAAIABAAQAbAAAWgFIACgBIACgBIAXgHIgXAHIgCABIgCABQgWAFgbAAIgBAAIAAAAIgBAAIgBAAQgbAAAAgCIAAAAQgNgGAIgMQANAHANACQACgHAKgBQAUADAQgBIAcAAQAJgBAAAEIAZgIIgZARIgaAMQgSAKgXAEIgRACQgMAAgGgEg");
	this.shape_127.setTransform(-1.2,1.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#BE8552").ss(1,1,1).p("Ag4gCQgCACAhAAQAfgBAVgDQAKgBAlgCQghgDACABQADABgagHQgYgHgGACQgGACgJADQgNACgBgBQgQgCgRgGQgFAIAVAMQgIALAKAGQAKAHAQAAQARABAYgHQAZgIAGgCQAGgDAYgK");
	this.shape_128.setTransform(-1.3,2.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C9996D").s().p("AgcAWQgQAAgKgHQgKgGAIgLIAAAAQAAACAOAAIABAAIAAAAIAQAAQAfgBAVgDIAvgDIgeANQgGACgZAIQgWAHgQAAIgDgBgAgqAAQgOAAAAgCIAAAAQgVgMAFgIQARAGAQACIAOgBIAPgFQAGgCAYAHIAXAGQgCgBAhADIgvADQgVADgfABIgQAAIAAAAIgBAAgAg4gCIAAAAgABKgHIAAAAg");
	this.shape_129.setTransform(-1.3,2.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#BE8552").ss(1,1,1).p("AgyAEQgIgHgCgJQAMAFAGgCIAPgKQAugKAqAOQg8AAgyASQgBAAAAABgAA9gPQgkAYgfAJQgMAEgHABQgEAAgGAAQgHACgHgBQgKgHAFgHIAEgG");
	this.shape_130.setTransform(-2.1,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C49162").s().p("AgxAYQgJgHAEgHIAEgGIABgBQAxgSA9AAQgkAYgfAJQgMAEgHABIgKAAIgKABIgEAAgAg8gMQANAFAFgCIAPgKQAugKAqAOQg9AAgxASIgBABQgIgHgCgJgAA9gPIAAAAg");
	this.shape_131.setTransform(-2.1,0.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAugEIAAABIAAAAQgHARgLAFQABAAABgBQgPAEgJgEQgIgFgHgEQgMgFgGgBQgGAAgCADQgDABgBAEQAAAFAAAFQABACAAABQACADACgBQABAAABgBQAAgBABAAQACgBACAAQAIAAAHAAQAJABAJACQAKACAMgJQgBABgBAAQgCABAGgDAAugEIAAAAIAAABAAugEQgrgEgRgBQgUAAgEgBQgEgBgBgDQgBgEgBgHIAOAIIANgIQAXAPARABQAQABAIAEg");
	this.shape_132.setTransform(-3.7,0.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(0.5,1,1).p("AgMAKQAdgBAZgLIABgBAgqgJIAEAQ");
	this.shape_133.setTransform(-3.4,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C49162").s().p("AglAYIgBgDIAAgKQAAgEADgBQACgDAHAAQAFABAMAFIAQAJQAIAEAQgEIgFACIACgBQgMAIgKgBIgRgDIgQAAIgDABIgCABIgBABIgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBgAgOgJQgTAAgFgBQgDgBgBgDIgDgLIAOAIIANgIQAYAPAQABQAQABAIAEQgqgEgSgBg");
	this.shape_134.setTransform(-3.7,0.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgeAEQgGAAgCADIgEgQQAFABAUAAQARABAqAEIAAABIAAgBIABAAIgBABQgZALgdABQgMgFgGgBg");
	this.shape_135.setTransform(-3.4,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#402424").s().p("AAMAKIgCACIACgCQgNAEgIgEIgSgIQAegCAZgLIAAAAIAAAAIAAAAIAAAAQgHARgLAGIgCAAIAAAAIAEgCgAAcgLg");
	this.shape_136.setTransform(-1.9,0.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAoAEQABgBACgBQAHgCAGgKQgDgBgDgBQgDgBgEAAQgFAAgEAAQgVABgTACQghACgEAAQgBAAgBAAAArgNQABAAACAAIgEgBQgQAAgDgBQgEAAgFAAQgOgBgNgGQgDgBgCAAQgKgBgIAGQgBABgBAAQgCABgCgBQgCAAgCAAQgFgBgEgDQACACACAEQACAFAEACIAAAAAAoAEQgXANgHACQgIADgGABQgHABgHAAQgKABgKgDQgNgCAIgOQAYgFASAAQABAAAAAAQAFABATADQAJACAHgDg");
	this.shape_137.setTransform(-2.5,0.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(0.5,1,1).p("AgvgFIAAAAIAAAAgAguAKQAAgGgBgIIAAgBIAAAAAAwgJQghAJgBAAQgNAEgCAA");
	this.shape_138.setTransform(-2.3,0.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C49162").s().p("AgiAWQgMgCAIgOQAYgFAQAAIACAAIAZAEQAJACAHgDQgXANgHACQgIADgHABIgNABIgFAAQgHAAgJgCgAgmgIIgBAAIgBAAIAAAAIAAAAQgEgCgCgFIgEgGQAEADAFABIAEAAIAEAAIABgBQAJgGAJABIAFABQAMAGAPABIAKAAIATABIAEABIgEAAIgIAAIgoADIglACIAAAAg");
	this.shape_139.setTransform(-3,0.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgvgEIAAAAIAAAAIAAAAIACAAIAlgCIAogDIAIAAIAIABIgiAJIgPAEIgCAAQgTAAgYAFIgBgOg");
	this.shape_140.setTransform(-2.3,0.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#402424").s().p("AgCAJIgZgEIARgFIAggIIAGACQgGAIgHAEIgDABQgFACgFAAIgEAAg");
	this.shape_141.setTransform(0.2,0.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#BE8552").ss(0.5,1,1).p("AAxgKQAKACAAAJQhBgFghAMQgCABgDABQgOAJAQAFQAIAAAHgBQAIgBAHgCQAIgDAHgDQAIgDAHgCQAFgBAFAAQACAAAdgHAAxgKIhPgNQgMAOgJgFIgHAAIAAAAQgDAKASADQACgNBaAEg");
	this.shape_142.setTransform(-2.7,-0.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(0.5,1,1).p("AACAFIgDgJ");
	this.shape_143.setTransform(-7,-0.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C49162").s().p("AgsAKIAFgCQAhgMBBAFIgeAHIgKABIgQAEIgPAHQgHACgIAAIgOACQgRgFAOgJgAg5gOIgBAAIAIAAQAIAFAMgOIBPANQhagEgCANQgSgDAEgKg");
	this.shape_144.setTransform(-2.7,-0.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgzAAQADgMBZAEQALADgBAIQhAgFghAMg");
	this.shape_145.setTransform(-2,-1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#BE8552").ss(1,1,1).p("ABHgeQgYAGgDAAQgcAJgcgJQgCAAgBABQgGAFgHAFQgLADgBAAQgOgBgPgFQAAAAgBAAIAAABQgDAJAUAKABHgeQgLAGgNAHQgKAFgLAGQgaALgaABQgcACABgEQgFAQAJAHQAFACAFABQAHACAJgBQABAAABgBQAQgDAagRQAGgEAGgFQAVgNARgSg");
	this.shape_146.setTransform(-2.4,1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C49162").s().p("AgnAeQgFgBgFgCQgJgHAFgQIAAAAQAAADANAAIAAAAIAAAAIAMAAIACgBQAagBAagLIAVgLIAYgNQgRASgVANIgMAJQgaARgQADIgCABIgIAAIgIgBgAgoAHQgNAAAAgDIAAAAQgUgKADgJIABgBQAPAFAOABIAMgDIANgKIADgBQAcAJAcgJIAbgGIgYANIgVALQgaALgaABIgCABIgMAAIAAAAIAAAAg");
	this.shape_147.setTransform(-2.4,1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#BE8552").ss(1,1,1).p("ABHgZQgVAPgVAGQgGACgGACQgRACgSABQgMABgLgCQgJgCgJgDQgEAPAFAHQAGAGAIgBQACAAABAAQAGgBACAAQADABAHACQAIADAUgGQAHgBAFgDQAOgEAKgIQAOgIAQgYQgLAHgLABQgPABgRABQAAAAgBAAQgfgFgDABQgDACgOAEQgDAAgDgBQgKgCgLgGQgEgCgEgCQgBANAMAK");
	this.shape_148.setTransform(-2.8,2.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C49162").s().p("AgXAaIgKgDIgIABIgDAAQgIABgGgGQgFgHAEgPQgMgKABgNIAIAEQALAGAKACIAGABIARgGQADgBAfAFIABAAIAggCQALgBALgHQgVAPgVAGIgMAEQgRACgSABIgJAAIAAAAIAAAAIgGAAIgCAAIgFgBIgBAAQgJgCgJgDQAJADAJACIABAAIAFABIACAAIAGAAIAAAAIAAAAIAJAAQASgBARgCIAMgEQAVgGAVgPQgQAYgOAIQgKAIgOAEIgMAEQgNAEgJAAIgGgBgABHgZIAAAAg");
	this.shape_149.setTransform(-2.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]},1).to({state:[]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},2).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-4.1,17.5,12.1);


(lib.glaptop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFUmIIAAAAIgBAAIs+gIAlDGHIjFsKINQABIDBMT");
	this.shape.setTransform(52.2,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AC2mCIALgGIABAAIAAAAIC8MBIANAQIgUAIItJAAIgDgKADCmIIAAAAAF+F5QCRgeCMgUIAAAPIj8ArIAAAAIgUAIAp9mQIgdAN");
	this.shape_1.setTransform(66.8,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7F7").s().p("AF3GRIjBsTItQgBIAdgNIM+AIIgLAGIALgGIABAAIC8MBIANAQIgNgQQCRgeCMgUIAAAPIj7ArIAAAAIgVAIIgUAIgAnSGRIgDgKIjFsKINQABIDBMTgAqamDgADBmIg");
	this.shape_2.setTransform(66.8,40.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.8,135.5,82.4);


(lib.gdesk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APHsIIAACuIAAVEIAAAZAKci/IgBigIAAiKIAAkYAP0MAIAAgWIAAuMIAApmAKbh6IAANWIAAAtAvzMGIAAgqIAAwZIAAnEAvzMGIAxgZIAAgRAvzMJIAAgD");
	this.shape.setTransform(132.9,89.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("APztCMgiGAAAQgRAAgNASQgMASAAAaQAAAKACAKQADAMAHALQANASARAAIA7AAIDXAAIaOAAIDXAAIAPAAQAFAAAEgCQAFgBADgDQAGgFAGgHQAHgLADgMQACgKAAgKQAAgagMgSQgHgJgIgFgAQErNIA1AAIAtAAIAtAAIAUAAQAKgFAGgFQAVgUgogeIijg1QgCgBgDgBQgEgCgFAAAMOiEIgBBEARmM6IACAAIArgDIAAxxIAAmTAMNNDIDXAAIAAyMIAAl+ARmMkIgtAAAQ5M9IhQAGAxYBsQAAijAAilQAAj1AAj2AMNMWI5dAAIgxAAAxYLoIAABbIDXAAAxYBsQgTEzATFJAxYBsIAAJ8");
	this.shape_1.setTransform(121.5,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B5F5B").s().p("AQ8hyIAAiuIAACuQhMAQgJDFIAAl8IAOAAQAFgBAFgBIAIgFIA1AAIAtAAIAtAAIAAGSQglAwgICiIAApkIAAJkQgNkWggiggAMQCHIAMgEQgKBOgCBWgAxVkZIg7AAQgRgBgNgSQgHgKgDgNMAjVAAAICcAZQgFAGgKAEIgUAAIgtAAIgtAAIg1AAQAGgEAFgIQAIgKADgNQgDANgIAKQgFAIgGAEIgIAFQgFABgFABIgOAAIjXAAI6OAAIjXAAIDXAAIaOAAIDXAAIAAF8Qgsj8hIgkQgtBfgZB1QgMgMgRgMIAAkYIAAEYQgVgRgcgTQi+h+qThFQqUhFh4HWIAAnCIAAHCQgLlGhUhHQhhC4gXD8IAAnpgAt+CpgAPnkZgAQHkgg");
	this.shape_2.setTransform(121.2,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F827F").s().p("APkNDIAAyMIAASMIjXAAIAAgtIAAtWIABhEQAChXAJhOIgMAFIAAiKIAACKIABCgIgBBEIAANWI5dAAIgxAAIAAwZQB4nYKVBGQKSBFC+B+QAcATAVARQARAOAMAMQAZh3AthgQBIAlAsD9QAJjGBMgRIAAVEIAA1EQAgCiANEWQAJihAkgxIAARxIgrADIgCAAIAAgWIAAuMIAAOMIgtAAIAAAZIhQAGgAxYNDIAAhbIAAp8IAAlIQAXj9Bhi5QBUBHALFIIAAQZIAAAqIAAADgAuBMWIAxAAIAAARIgxAZgAxYBsIAAJ8QgTlJATkzgAxYjcIAAFIQgNivANiZgAxYjcIAAAAgAuBkDIAAAAgAQ5oggAQarwQACgKAAgKQAAgagMgSQgHgJgIgFICjA1QAoAegVAUgAy7rwQgCgKAAgKQAAgaAMgSQANgSARAAMAiGAAAIAOAEQAIAFAHAJQAMASAAAaQAAAKgCAKg");
	this.shape_3.setTransform(121.5,83.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,245,169.1);


(lib.gchair = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlxhSQDhnGiCmdQA1hQBUgPQF8hKGOBlQA4gBAlBMQkTIIDdFUArTCdQAUgGAUgHQCTg1CiihIAAAAIAAAAArTCdQAUADAUACQIgBMIlhbQC9guBZirQAAAAAAAAQAAAAAAAAQAiAmgjArIAAM1IgqAtIg3AAIAAscIA3gnIAqgfArTDUIBVAAIAoAAIAAMvIgoAyIhVAAIAAthQgTgcATgbAmJDUIA3AAIAZAAIAAJ8IgZAhIg3gBIAAqcIjNAAAGaCTQAZAggZAhIAogdIAANaIgoAkIhkAAIAAthIpvAAAGaDUIhkAAAJOBRIiMBmAp+DUIAANhAlSDUIAAKdAKFAqIAANDAGaDUIAANh");
	this.shape.setTransform(73.4,110.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AINgEQADAEADAFIwlAAIAAAAQADgFACgE");
	this.shape_1.setTransform(89,102.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AFIIUIAAtfIBlAAIAogdIAANZIgoAjIAAtfIAANfgArBIUIAAtfIBVAAIAoAAIAAMuIgoAxIAAtfIAANfgAlAFQgAl3FQIAAqbIA3AAIAZAAIAAJ7IgZAgIAAqbIAAKbgAJhFMIAAsZIA3goIAANBgAKYn1IAqgeIAAMyIgqAtg");
	this.shape_2.setTransform(71.6,165.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#15212D").s().p("AGaKEQAMgQAAgQQAAgRgMgQQC9guBZisIAAAAQAiAmgjAtIgqAeIg3AoIiMBlIgoAdIAAAAgAE2KEIpvAAIgZAAIg3AAIjNAAIgoAAIhVAAQgTgbATgcIAoAGIANACQDwAgDxAAIAAAAIAAAAQEfAAEiguIAMgCIAKgCIgKACIgMACQkiAukfAAIAAAAIAAAAQjxAAjwggIgNgCIgogGQAUgFAUgHQCTg2CiiiIAAAAIAAAAIQlAAIABAAQhZCsi9AuQAMAQAAARQAAAQgMAQgAKwFpgAl2FpIAAAAIAFgMIQZAAIAHAMgAlxFdQDhnFiCmcQA1hRBUgPQF8hKGOBlQA4gBAlBNQkTIGDdFUg");
	this.shape_3.setTransform(73.4,67.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,2,148.9,217.4);


(lib.mcjanesounddedication = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("Dedication");
	}
	this.frame_182 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(178).call(this.frame_182).wait(1));

	// bubble
	this.text = new cjs.Text("Very good job!\nYour effort and dedication are impressive and it is paying off.", "16px 'Helvetica'", "#282415");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 175;
	this.text.setTransform(121.9,-47.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00C5E9").ss(2.1,1,1).p("ABfhfQABCugBARQgBABi8i5");
	this.shape.setTransform(128.1,63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#17ADCD").ss(2.1,1,1).p("AheADQC+gEgBgB");
	this.shape_1.setTransform(128.1,54.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C5E9").s().p("AhehYQC9gGAAgBIAAC/IAAAAQgCAAi7i4gABfhfIAAAAIAAAAg");
	this.shape_2.setTransform(128.1,63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B9DB").ss(2.5,1,1).p("AtWnMQAwhSMfAPQEuAGEHATQEGATAkARQAjASANCUQALB7gFC8QgECUgLCaQgKCegIAYQgHAXhCALQgBAA4oAAQgTAEgXgIQgtgQgSg5QgLghgKiNQgJiGgCiFQgDiaAMh4QAOiNAhg4g");
	this.shape_3.setTransform(125.4,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]},2).to({state:[]},174).to({state:[]},5).wait(2));

	// table
	this.instance = new lib.gdesk("synched",0);
	this.instance.setTransform(121.5,336.5,1,1,0,0,0,121.5,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({startPosition:0},0).wait(1));

	// laptop
	this.instance_1 = new lib.glaptop("synched",0);
	this.instance_1.setTransform(96.9,221.1,0.992,1.015,0,7.1,0,66.8,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(183));

	// jane eyes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AA2AAIAFgEIABgCIAEgDIACgBQAGgBAGgBQACAAADgBQAEAAAEABQAHABAHAFQACABADACQAFADAEACQAFAFABAHAh7AJQgBAAABgBQABgCAHgEQADgBADgBQABAAACAAIAEgBIAOgDIAFABQAEACAEABQAEADADAG");
	this.shape_4.setTransform(145.2,123.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("ABHABQgEAAgDgBQgCgBgCgCABNgBQgCgBgBgCQgBgEgBgDABagFQgCgCAAgDQABgCgBgCAB7ACQgCgCgBgDABogFQABgGgBgCAhnAJQgFgEgDgCQgCgCAAgBAhaAEQgBgDgCgBQgBAAgBAAQgBAAAAgBAhLACQgCgBAAgBQgCgCgBgEAhvAPQgFgBgDgDQgDgBABgE");
	this.shape_5.setTransform(144,123.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhyASIgBgCQgFgEgCgJIgBgEIAAgCQABgCAHgDIAGgDIADgBQgHAMAEAMIACAIIgHgCgABAAKQgKgDAAgSIAFgGIABgCQgBASAKANIgFgCgABpgPIAKAHQAGAFAEAEQgLAEgIAAQADgFgEgPg");
	this.shape_6.setTransform(145.2,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474B70").s().p("AhrAPQgEgOAHgKIAEgBIAOgDIAFABQAEABAEAEQAEADADAEQADAGgFAIIgCAEIgjAFIgCgIgABOARIgHgCQgKgOABgQIAEgDIACgBIAMgCIAFgBIAIABQAHABAHAFIAAADQAEANgDAHIAAABIgDADQgOAFgJAAIgEAAg");
	this.shape_7.setTransform(145,124.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("ABCAAQgFAAgEAAQgCgBgCgBABJgBQgDgBgBgBQgCgCAAgCABpgDQABgEgBgBABZgDQgDgCAAgBQAAgBAAgBAhJABQgCgBgBAAQgCgBAAgCAhaACQgBgCgCAAQgBAAgBAAAhyAJQgGgBgDgBQgEgBABgCAhoAFQgGgCgDgCQgDgBAAAAAB/AAQgCAAAAgC");
	this.shape_8.setTransform(144.4,123.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AAtAAIAGgCIACgBIAFgBIACgBQAHgBAHAAQADAAADAAQAFgBAFABQAIABAIACQADABADABQAGABAFABQAFADACADAiBAHQgBAAABgBQABgBAJgDQADgBAEAAQABgBACAAIAEAAIARAAIAFAAQAEAAAFABQAFACADAE");
	this.shape_9.setTransform(145.9,124);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah2AMIgBgCQgFgCgDgGIgCgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAJgDIAHgBIADgBQgIAHAFAIIACAFIgIgBgAA6ADQgMgCAAgJIAFgDIACgBQgBAKAMAGIgGgBgABrgKIAMAEQAHADAEADQgNAAgJAAQADgCgEgIg");
	this.shape_10.setTransform(145.9,124.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#474B70").s().p("AhtAKQgFgJAIgGIAEgBIARgBIAFAAQAEABAFACQAFACADACQAEAEgGAFIgCADIgoADIgCgFgABLAHIgIgBQgMgGABgKIAFgBIACgBIAOgBIAGAAIAKAAIAQADIABACQAEAIgEACIAAAAIgEADQgRACgLAAIgDAAg");
	this.shape_11.setTransform(145.6,124.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("ABCAAQgFAAgEAAQgCgBgCgBABJgBQgDgBgBgBQgCgCAAgCABZgDQgDgCAAgBQAAgBAAgBABpgDQABgEgBgBAB/AAQgCAAAAgCAhJABQgCgBgBAAQgCgBAAgCAhaACQgBgCgCAAQgBAAgBAAAhoAFQgGgCgDgCQgDgBAAAAAhyAJQgGgBgDgBQgEgBABgC");
	this.shape_12.setTransform(144.4,123.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah2AMIgBgCQgFgCgDgGIgCgCQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAJgDIAHgBIADgBQgIAHAFAIIACAFIgIgBgAA6ADQgMgCAAgJIAFgDIACgBQgBAKAMAGIgGgBgABrgKIAMAEQAHADAEADQgNAAgJAAQADgCgEgIg");
	this.shape_13.setTransform(145.9,124.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("ABIAAQgCgBgBgCQgCgEAAgEABCACQgFAAgEgCQgCAAgCgDABYgDQgCgCAAgDQAAgCAAgCABogCQACgGgBgDAB/AFQgCgDgBgCAhpAHQgFgFgEgCQgCgBAAgDAhJAAQgCAAgBgCQgCgEAAgEAhaACQgBgCgCgBQgBAAgBgCQgCAAAAgCAhyANQgGgBgEgDQgDgDABgE");
	this.shape_14.setTransform(144.4,122.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAtgBIAGgFIACgDIAFgCIACgBQAHAAAHgBQADAAADgBQAFAAAFABQAIACAIAFQADABADACQAGADAFADQAGAFABAHAiBAFQAAgBAAgBQACgCAIgCQADgCAEgCQABAAACgBIAEgBIARgCIAFABQAFABAEAEQAFADADAH");
	this.shape_15.setTransform(145.9,123.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#474B70").s().p("AhtAOQgFgOAIgOIAEgBIARgCIAFAAQAFACAEAEQAFAEADAHQAEAGgGAIIgCAFIgoAEIgCgJgABLAQIgIgBQgMgPABgRIAFgCIACgBIAOgBIAGgBIAKABQAIACAIAFIABADQAEANgEAHIAAABIgEADQgPAEgJAAIgHgBg");
	this.shape_16.setTransform(145.6,124.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah2ATIgBgDQgFgEgDgMIgCgFQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQACgCAIgEIAHgEIADgBQgIAOAFAOIACAJIgIgBgAA6AKQgMgEgBgSIAGgGIACgBQgBASAMANIgGgCgABrAHQAEgHgEgOIAMAIQAHAFAEAFQgMADgJAAIgCAAg");
	this.shape_17.setTransform(145.9,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5,1,1).p("ABYgBQgCgBAAgCQAAgBAAgCABIAAQgCAAgBgBQgCgDAAgCABogBQACgDgBgCAhJAAQgCAAgBgBQgCgCAAgCAhpAEQgFgDgEgBQgCAAAAgCAhyAIQgGgBgEgCQgDgBABgDAB/ADQgCgCgBgBABCABQgFAAgEgBQgCAAgCgBAhaABQgBgBgCAA");
	this.shape_18.setTransform(144.4,123.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AAtAAIAGgDIACgBIAFgCIACAAQAHgBAHAAQADAAADAAQAFgBAFABQAIABAIADQADABADABQAGABAFACQAFADACAEAhCAEQgDgEgFgBQgFgCgEgBIgFgBIgRACIgEAAQgCAAgCABQgDABgDABQgJAAgBAC");
	this.shape_19.setTransform(145.9,124.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},45).to({state:[{t:this.shape_11,p:{y:124.7}},{t:this.shape_10},{t:this.shape_9,p:{y:124}},{t:this.shape_8}]},3).to({state:[{t:this.shape_11,p:{y:124.5}},{t:this.shape_13},{t:this.shape_9,p:{y:123.8}},{t:this.shape_12}]},5).to({state:[{t:this.shape_11,p:{y:124.7}},{t:this.shape_10},{t:this.shape_9,p:{y:124}},{t:this.shape_8}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},8).to({state:[{t:this.shape_19},{t:this.shape_18}]},47).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},69).wait(1));

	// jane mouth
	this.instance_2 = new lib.gjanemouthside("single",12);
	this.instance_2.setTransform(139.8,169.3,0.994,0.927,0,-19.4,-7.9,-1.4,4.3);
	this.instance_2._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BE8552").ss(1,1,1).p("Ag7ARQgZgHACgKIAAAAQABAAAAAAQATABAQgBQABAAAMgEQAIgHAIgGQAAAAACgBQAjADAggOQADAAAdgMQgTAWgWATQgHADgHAGQgdAWgRAGQgBACgBgBQgKAEgJgBQgHAAgFgCQgMgFADgRgABUgpQgNAJgOAJQgMAIgMAHQgdAQgfAGQggAHAAgE");
	this.shape_20.setTransform(140.1,165.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C49162").s().p("AgmApQgHAAgFgCQgMgFADgRQgZgHACgKIABAAQATABAQgBQABAAAMgEIAQgNIACgBQAjADAggOIAggMIgbASIgYAPQgdAQgfAGIgEABIgDABIgBAAIAAAAIgGABIgMACIgCAAIAAAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAABAAAAQAAAAABABQAAAAABAAQABAAABAAIAAAAIACAAIAMgCIAGgBIAAAAIABAAIADgBIAEgBQAfgGAdgQIAYgPIAbgSQgTAWgWATIgOAJQgdAWgRAGQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQgJAEgIAAIgCgBgABUgpIAAAAg");
	this.shape_21.setTransform(140.1,165.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#BE8552").ss(1,1,1).p("Ag7ARQgZgHACgKIAAAAQAAAAABAAQATABAQgBQABAAANgEQAHgHAHgGQABAAACgBQAjAEAggPQADgBAdgKQgTAVgWATQgHADgGAGQgeAWgRAGQgBABgBAAQgKADgJAAQgHAAgFgCQgMgFADgRgABUgoQgNAIgOAJQgMAIgMAHQgdAQgfAHQggAHAAgF");
	this.shape_22.setTransform(148.2,143.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C49162").s().p("AgyAnQgMgFADgRQgZgHACgKIABAAQATABAQgBQABAAANgEIAOgNIADgBQAjAEAggPIAggLIgbARIgYAPQgdAQgfAHIgBAAIgDABIgCAAIgBAAIgCABIgBAAIgEAAIgEABIgEABIgCAAIgDAAIAAAAQgFAAAAgCIAAAAIAAAAQAAACAFAAIAAAAIADAAIACAAIAEgBIAEgBIAEAAIABAAIACgBIABAAIACAAIADgBIABAAQAfgHAdgQIAYgPIAbgRQgTAVgWATIgNAJQgeAWgRAGIgCABQgKADgJAAIgMgCgABUgoIAAAAg");
	this.shape_23.setTransform(148.2,143.9);

	this.text_1 = new cjs.Text("", "12px '_sans'", "#282415");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(148,212.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.shape_21},{t:this.shape_20}]},4).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.shape_23},{t:this.shape_22}]},11).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.text_1}]},43).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(5).to({regX:-1.2,regY:2,scaleX:1.02,scaleY:1.05,rotation:-30,skewX:0,skewY:0,x:141.4,y:166.7,startPosition:28},0).wait(3).to({regY:1.9,scaleX:0.99,scaleY:0.77,rotation:-15,x:140,y:167.2,startPosition:12},0).wait(7).to({regY:2,scaleX:1.1,scaleY:1.05,rotation:-30,x:141.1,y:165.7,startPosition:28},0).wait(10).to({regY:1.9,scaleX:0.99,scaleY:0.77,rotation:-15,x:140,y:167.2,startPosition:12},0).wait(5).to({regY:2,scaleX:1.1,scaleY:1.05,rotation:-30,x:141.1,y:165.7,startPosition:28},0).to({_off:true},4).wait(7).to({_off:false,regY:1.9,scaleX:1.28,rotation:0,skewY:-6.7,x:149.4,y:144.9},0).wait(8).to({regX:-1.1,scaleX:0.74,scaleY:0.85,skewX:-7.4,skewY:4.6,x:147,y:145.6,startPosition:4},0).wait(1).to({regX:-1,scaleY:1.02,skewY:4.6,x:147.6,y:145.8},0).wait(1).to({regX:-1.1,regY:2.1,scaleX:0.99,scaleY:1.11,skewX:-3.2,skewY:8.3,x:146.6,y:145.6,startPosition:12},0).wait(1).to({regX:-1.2,regY:2,scaleY:1.19,x:146.7,y:145.7},0).wait(2).to({regY:2.1,scaleY:0.93,y:146.1},0).wait(2).to({scaleY:0.77},0).wait(2).to({scaleY:0.93,y:145.1},0).wait(2).to({regY:2,scaleX:0.98,scaleY:1,skewX:0,skewY:7.7,x:146.8,y:145.9,startPosition:0},0).wait(2).to({regY:2.1,scaleX:0.99,scaleY:0.77,skewX:-3.2,skewY:8.3,x:146.7,y:146.1,startPosition:12},0).wait(3).to({startPosition:12},0).wait(4).to({regY:2,scaleX:1.02,scaleY:0.76,skewX:0,skewY:7.7,x:146.8,y:145.9,startPosition:0},0).wait(2).to({scaleX:1.1,scaleY:1.05,skewY:0,x:149.1,y:145.4,startPosition:28},0).wait(2).to({scaleX:0.98,scaleY:1,skewY:7.7,x:146.8,y:145.9,startPosition:0},0).wait(2).to({scaleX:0.86,scaleY:0.91,skewY:0,x:145.3,startPosition:24},0).wait(5).to({scaleX:1.1,scaleY:1.05,x:149.1,y:145.4,startPosition:28},0).to({_off:true},11).wait(3).to({_off:false,regY:2.1,scaleX:0.99,scaleY:0.77,rotation:-1,x:147.7,y:145,startPosition:12},0).wait(2).to({rotation:0,skewX:-3.2,skewY:8.3,x:146.7,y:146.1},0).wait(2).to({regY:2,scaleX:0.98,scaleY:1,skewX:0,skewY:7.7,x:146.8,y:145.9,startPosition:0},0).wait(11).to({regY:2.1,scaleX:0.99,scaleY:0.93,skewX:-3.2,skewY:8.3,x:146.7,y:145.1,startPosition:12},0).wait(4).to({regY:2,scaleX:1.1,scaleY:1.05,skewX:0,skewY:0,x:148.1,y:145.4,startPosition:28},0).wait(5).to({regY:2.1,scaleX:0.99,scaleY:0.93,skewX:-3.2,skewY:8.3,x:146.7,y:145.1,startPosition:12},0).wait(2).to({regY:2,scaleX:0.98,scaleY:1,skewX:0,skewY:7.7,x:146.8,y:145.9,startPosition:0},0).wait(4).to({scaleX:0.86,scaleY:0.91,skewY:0,x:145.3,startPosition:24},0).wait(3).to({regY:2.1,scaleX:0.99,scaleY:0.93,skewX:-3.2,skewY:8.3,x:146.7,y:145.1,startPosition:12},0).wait(2).to({regY:2,scaleX:0.98,scaleY:1,skewX:0,skewY:7.7,x:146.8,y:145.9,startPosition:0},0).wait(3).to({regY:2.1,scaleX:0.99,scaleY:0.93,skewX:-3.2,skewY:8.3,x:146.7,y:145.1,startPosition:12},0).to({_off:true},3).wait(44));

	// jane
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#BE8552").ss(1,1,1).p("Ag1AEQgUgKADgJIAAgBQABAAAAAAQAPAFAOABQABAAALgDQAHgFAGgFQABgBACAAQAcAJAcgJQADAAAYgGQgRASgVANQgGAFgGAEQgaARgQADQgBABgBAAQgJABgHgCQgFgBgFgCQgJgHAFgQgABHgeQgLAGgNAHQgKAFgLAGQgaALgaABQgcACABgE");
	this.shape_24.setTransform(140.6,144.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.5,1,1).p("ABCgFQgCAAgDgBQgIgCgGgEABPgKQgBgBgCgBQgBgBgBgBQgDgBgCgBABZgKQAFgBAFADAhOAOQgBgBAAAAIgBgBQgDgCgDgBQgDgBgDgCAhTARIAAAAQgMAAgDgFAhCAOQgEgEgEgDAA6ACIAAAAQgNACgIgI");
	this.shape_25.setTransform(135.9,124);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#8F6910").ss(1,1,1).p("AAHgJQAegNAQgEQACAAACAAQAGgBAFAAQAXgBATALQARAKAPAHAiNAcIAAAAQAQgbAbAC");
	this.shape_26.setTransform(138.1,118);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AFkhQQgRgSgXgRQgDgEgWgEQAHgEAFgFQAKgKAHgMQAnADATAFQATAGASADQgYghgVgjQgHgMgGgMQgGgLgEgMQgDgHgCgHQgJgYABgaQABgNAEgMQABgCABgCQAJgPAFgRQANgkADglQAFg2gFg3QgGg8gQg7QgNgugYgqQgGgMgIgLQgOgVgRgSQgBgBgBgBQgWgXgdgSQgdgSglgHQgHgCgGAAQgBAAgBAAIAAAAQAAAAgBAAQgNgBgNADQgRADgSAIQgPgGggAAQgYAAgoAFIgBAAQgIACgJABQgmAOgqAmQgJAIgHALQgBABAAAAQgBABAAAAIAAAAQgbApgLBMQgHAuAJArQAAABABABQAAAAAAAAIAAABQALAwAeAsQgEgeAKg6QAAgFABgFQACgMADgKQgPALgRAJQgEADgFABQAegeALgMIADgEQABAAAAAAQABgBABgBQAAAAAAgBIABAAQAHgWAKgNQAKgNAOgEQgBACgCABQgRAagVAXADUoaQANghAQgDQAEgBAEACQALAEAJAXQAMAfgLAcQgIAXgNANQgDAEgDACADJoqQACAHACAHQAAABABAAQAAABAAABQADAJABAIQACAKACAKQAAAAAAAAQAGAPAFAOQAEAMAEALQABADABADIAAAAQAGAVAFAWQAAAAAAAAQACAHACAHIAAAAQAAABAAABQAAABABACQAGAaADAaQACAYABAXACHpvQASAeAOAdQAAABAAAAQABABAAAAQACAFACAEQAAABABABQAAABABABIAAAAQAAABAAAAQAAABABAAQAAACABACQALAaAJAYQADAJACAIQAHAVAGATQAAABAAAAQAEANAEAMQACAIACAIIAAAAQACAHACAHIAAABQAEAQAEAQQAHAiAIAiQACANADAMADcl5QgBADgBADQgBAGAAAHIAAAAQgCAJABAJQAAAJABAJQACASAHARQAFARAIAVQAAABAAAAQAEAMAEANQAHAUAHAXQANAnALAVIAAAAIAAAAQAAABAAAAQAHAOAOAAIAEAUQgCADgCADQgHAKgIAJQgSAYgVAVIAAAAQAAABgBAAIAAAAQAAABgBAAQAAAAAAAAQgKAKgKAGQAAABAAAAQABAQABAOQAAAAAAABIAAAAQACgBADgBQAKAZAJAVQAZA3AWAeQAHAIAGAHQAUAWAXAMIABAAIAAAAQACABADABQgCgCgBgBQAAgBgBgBQgKg2gFg3IAAgBQgBgWAAgXQABg/AShAQABgCAAgCIBbAuQATAKAPAJQAWAGArA/QARAYAMAhIhYASAFthMIgJgEAFshIIgEgEQgBgBgCgCQAAAAgBgBIAAAAADoAjQACAhABAVQAAAQACARQAAANACAMQADAmAGAmQAJA/APA+IASA9IAAABIACAGAI5F3QAEgLADgLQALgygBg2QAAgQgBgRQgBgGgBgHIApAAQAAAEAAAFQADBRgPA9QgDAOgEAMIgGA5IAAgBIAAABQgBAUgCAIIAAAEQgBADAAACAJHDLIg4AAIgfhGIACAtAJIBzIA5BTIgRAFAAIrMQAHAPAJAQQABABABACQACAFADAEQABACABABQALAQAOAOQAWAXAXAUQAYAWAYAUQABAAAAABQADACACACQgBgDgBgDQAAAAAAgBIAAAAIAAAAQgFgKgGgJQgMgQgLgRQgBgCgCgDAglriQAGAfAMAcQAFANAHAMQAAABAAABQABABABABQAAAAAAABIABAAQAKAWAPAVQAEAFANAPQABABAAAAQAFAFAFAHQgEgHgDgHQAAAAAAAAIAAAAQgPgigKgkQgBgDAAgCQgBgCAAgCQgCgHgBgGQgBgCAAgDQgDgQAAgQIgCgFQgBgBAAgBQAAAAAAgBQAAAAgBAAQgEgLgCgLABbnPQgKgRgMgFQgCgBgCgBQgCgBgBAAQgCAAgBAAQgFgBgEABQgDABgCAAQgFACgEACQgEAEgDAFAharCQAEgIAEgJAiKp1QAHgGAGgGQACgBABgBQABgBACgCQAfgeAYglQAGgKAFgMAiWn9QABABAAABQABABAAAAIAAgBAiUn6IAAABQABADABACIAAAAQAEAQAGAXQAEAMADAPQAAABAAAAQgIAcAAAcIAEAjQAHAdAUAZQAVAZAZAWQAGAFAGAFQAAABABAAQAAAAAAABQAJAHACAQIAAAAQABAMAQALQAIAFALAGQAAAAAAAAQAUAKAUgEQADgBAEgBQACAAACgBQAJgEAKgIQABAAAAgBQAIgGAGgFQAHAoABAbQAAAHAAAGQAAAFAAAEQgBAGgBAGQAAAAAAABIAAAAQgCAFAAADQgBAEgBADQgBACAAABQgPASgFANQgHAIgHAJIAAABQgEAFgEAGQgBACgCACIgTAvAgbmpQgDAHgCAFQgBABAAAAQAAAAAAABQgUApgMACQgLAZAfAIQABAAAAAAQAHACAIAAAhOm9IAAAAQgEgIgEgEQgCgCgDgBIAAAAQgBgBgBAAQgCgBgBAAQgEgBgEAAQgCABgBAAQgEABgBACIgBABADRlgQAAgDABgDIAAgBQABgGABgHQAAgJABgKABVjBQABgBABAAQAOgMAMgJQAIgGAHgGQAEgCADgDQAUgQAZgeIAAAAQABgBAAAAQAOgRAIgbQACgJACgJQAAgBAAAAQABgEABgDAA+hXQACgCABgCAA7hIQACgDACgDQAEgGAEgHQABgDACgDQgJADgKABQgCAAgCAAQgLAAgMgCQgXgMgSgSAA5hPQgHAJgHAJQgYAegZAbQgBACgDACQgEAVgFAWQgBACgBACIAAAAQgpBOgJB0IgFAMIgUA6QgEAQAAAQQAAAZANAZIAJAQIAcAwQAAABAAAAQAEAJAFAIQADAGAMAXQABAggEAfIgWgDIgegFAA9gRQANgBARALABdhoQgKAFgJACADzgXQgJABgJACQAAAAgBAAQgBABgBAAQgTAFgTAIQgLAFgGAGAgwjnQAAABAAABIAAAAQADANACAKQAAABAAABQABALAAALQAAAQgEAOQAAADgBACQgHAdgPAbQgBADgCACQgDAEgDAEAgRh4QgDACgCACQgUAUgYANAAIBEIAOgeIgLAcIgDACIgkBSIAVhGIAAgBIABAAgAgHBPIAAABIgTANQABgXAFgWQAAgDABgCAgcCWIgrBbADoAjQgLADgIACQgWAHgJADQg9AXgdB0QAAhbgHgdQgCgKgDgKQgMgpgbgRAgKAAIAgAmAgdHzIADAFIAHAPIAAAAAgTIHIAAAAIAAAAIADAJIAGAWIADANIAAAAQABAEAAAEQAHAkAEAlQABAGABAGQgGgCgEgCQgHgCgHgCQgKgCgJgEQgCAAAAgDQAAgVAEgVQADgPACgPAhOGZIgRCUIAOACIAAAAQgNBIgIA8QjXAmk9ClIAAAAQgDACgDABAAHKQQABAJABAKQAAACABACQABANABAOQAEAtAAAuIFGg2IABAAIgBgBIAShIQABgXADgfQgIgUgJgUQgBgEgCgEQgSgtgPgtQgBgEgBgDIgRg3IgDgGAALNPIgCAAIl1AAIBggoIDqgIIAygCAAKNWIAAAAIAAgBIABgGIgBAHIAAAAQgBAFgBAFQABgHAAgDgAAJNWQAAgBAAAAQABgBAAABAAJNWIqBAtAI5F3IAkAFAHyC0IAECkIABAXIBCAIAGEIxQgHgGgIgHQAIguAFgsQAQh9gKhmAIAJgQgUgBgVgDQgcgDgcgSQgJgHgSgPIgSBGQgDgIgDgHAFyJ3IgKAnAJSHfQgEATgGAYQgIAhgCAQQgBAQgEAWQgIABgJAAAIBJgQAEABADAAQAQABAQAAQgGAkgNAiQgDAIgZBAIgXBfInXAA");
	this.shape_27.setTransform(138.8,171.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A4211E").s().p("AA/goQg4gXhcgPQg9gHgDA5IgFAAIgCgJIgBAAIgHgQIgPgcIgJgRIAAgBIgcgwIgJgRQAsAVA7gNQAQgLAPgQQASAfA2AQQB2AhA0grIADAFIARA4IACAGQAPAuASArIAEAIIAQAoQgDAegBAYIgSBIQgsh8hhhkg");
	this.shape_28.setTransform(152.6,227.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3CFA4").s().p("Aj2JbIgCAAIAAgHIGsghIAAgDQA1hsAUhXIACAAIAGAAIAhABQgHAkgNAiIgbBIIgXBfgAkGGaIAMACIACATIABAEIACAbQAEAtAAAuIg0ACgAirm1IABgBIAAAAIAAAAIAagVIAPgLIAIgGQATgQAZgeIAAAAIABgBQAOgRAIgbIAEgSIgEASQgIAbgOARIgBABIAAAAQgZAegTAQIgIAGIgPALIgaAVIgBABIgOALIgCABQgJAIgKAEIgEABIgCgDQARgRAQgQIACgBQBHhAA1hKIADACIABgBIABgHIAAgCIABgHIAHAAIAAAAIgBASIABASIgEABQggB0goAlIgsAoIgEACQgBgbgGgog");
	this.shape_29.setTransform(164.7,196.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C49162").s().p("AgnAeQgFgBgFgCQgJgHAFgQIAAAAQAAADANAAIAAAAIAAAAIAMAAIACgBQAagBAagLIAVgLIAYgNQgRASgVANIgMAJQgaARgQADIgCABIgIAAIgIgBgAgoAHQgNAAAAgDIAAAAQgUgKADgJIABgBQAPAFAOABIAMgDIANgKIADgBQAcAJAcgJIAbgGIgYANIgVALQgaALgaABIgCABIgMAAIAAAAIAAAAgAg1AEIAAAAg");
	this.shape_30.setTransform(140.6,144.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#474B70").s().p("AhaAbIgDgKIgBgIQgBgIACgCIAAAAQACgCADgBIAEgBQAEgBAEACIACAAIACABIABAAIAEADQAEACAFAIIgBABIgDAIIgHAJIAAAAIgFADIgEABQgFAAgHgFgABHAPIgMgBIgCgBQgGgIgDgHQgDgIADgGIAAgBQADgFAFgDIAIgEIAFgCIAJAAIADABIAEAAIAEACQAOAZgOALIgBACIgDACIgBAAIAAAAQgEADgIAAIgBAAg");
	this.shape_31.setTransform(136.9,126);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AnxK8IABAAIACAEgAHgIkIAAAAIAAAAgAGrDYIABgBIACAGgAHxASIAAAAIABAAgACBhxIAAAAIAAAAgAByiRIAAAAIACAAgADIkSIAAgHIADgFIAFAAIgHANgABYmoIgBgBIACAAIAAABIgBABgABTnmIABAAIgBABgADPqoQAMAGAKAQIgVAQQANgNgOgZgAgLq9IgBgCIACABIgBABIAAAAg");
	this.shape_32.setTransform(125.1,191.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#76782D").s().p("AkiFEIgOgDIgTgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgVAEgVIAFgeQADgZAAgZIgBgOIAIAPIAAABIADAJIAFAWIAEANIAAAAIABAHQAIAkAFAmIACALIgNgEgABOEhIgRgpIgDgHQgSgtgPguIgDgHIgQg3IgCgFIAAgBIAMgIQAqA0AqAEQgFAsgJAvIAPANIgPgNQBEAnBqgHIACgBQAXgcAXhJIgKArQgIAhgCAQIgFAnIgRAAIgggBIgHAAIgBAAIgpgEQgcgEgcgSQgKgGgSgPIgRBFIgGgOgAlRDsIABgFIAVg7IACAEIABAOQAAAZgDAZgAEbAwIAGgXIgGAXIhCgJIgBgWIA4AAQAXgTAFhLQABA3gMAvIAIACIAdAAIgHAagADTiRIAAgDIgBgsIAfBGIA4AAIABAMIgBgMIApAAIAAAIIgoAEIg2AGgAgmjMIgKABIgCgiIgDg2IABAAIAFgBIATAtQAYA4AVAeIAMAOIgGAIQgngbgWgmgAkykWIABgFIAJgsIAhAnIgNAeIgRAMIAAAAIAAAAIgTAOQABgYAFgWg");
	this.shape_33.setTransform(167.5,204.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D82C27").s().p("AhqE4IgDgbIAAgEIgDgSIgBgMQgFgmgIgkIgCgHIAAAAIgDgNQgBgMAAgKQADg5A9AHQBdAPA3AXQBhBmAtB8IAAAAIlFA2QAAgtgDgugAgBAbQg2gQgTgdQgOAQgRAIQg7AOgsgUQgNgXAAgaQAAgPAEgQIAUg6IAGgMIAqhcIAmhSIADgBIALgcIAUgyQAaAUANAoIAFAVQAGAdAABbQAbh1A9gWIAfgKIATgFIADA1IACAiIACAZQADAmAGAlQAJBAAQA+IASA7IAAABIgBAAQgeAYg0AAQgnAAgxgOg");
	this.shape_34.setTransform(150.9,211.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9FA156").s().p("ABkE/QAJguAFgsQgqgFgqg0IgMAIIgSg9QgNg+gKg9QgFgmgEgmIgCgZIAKAAQAWAmAnAbIAGgIQAUAXAYALQgYgLgUgXIgMgPQgXgegXg3IgTguIgGgeIATgSIABAAIABgBIAAAAIAAgBIABAAQATgUASgZIAOgTIAFgGIgFgUQgNAAgHgOIgBgBIAAAAIAGgDQAXAEADAEQAXARARASIAAAAIABABIADADIAEAEIABgEIBaAuIAjATQAVAGArBBQASAYALAhIhXASIBXgSIA5BTIgRAFIgoAAIg4AAIgfhGIABAtIAAACIAhAqIA2gGIAogEQADBPgPA9IgdAAIgIgBQAMgygBg2IgCgfIACAfQgFBKgXAVIg4AAIgFiiIAFCiIABAXIBCAIIAjAFIgFA5IgBgBIAAABIgCAcIgBAEIgBAFIAAACIgBADQgXBJgWAbIgCACIgfABQhWAAg5gigAByDlQAJhNAAhEQAAgrgDgnQADAnAAArQAABEgJBNgABcgMIgCgDIgBgCQgLg2gEg3IAAgBIgBghIAAgMQABhBAShAQgSBAgBBBIAAAMIABAhIAAABQAEA3ALA2IABACIACADIgFgCIAAAAIAAAAIAAAAIAFACIAAAAgAliFKIgNgCIARiUIAbAwIABABIAIARIAPAdIgCgFIgVA8IgBAFgAkmi0IABABQgFAWgBAXIAUgNIAAAAIgWBGIgqBZQAJhyAohOgABcgMIAAAAgAkajlIAEgEQAagbAYgeIAOgSIAGAAIABABIAHgNIADgGQAKgCAJgFIgCAMIAAABIAAAAIgCAIIgCAHIAAADQgPASgFANIgPARIAAABIgIALIgCAEIgUAxgAjTktIAEgGIgEAGg");
	this.shape_35.setTransform(166.1,194.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEE3BC").s().p("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");
	this.shape_36.setTransform(132.7,179.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B66616").s().p("Ai0GUIADgFQAOgbAIgdIABgFQADgOAAgQQAAgLgBgLIAAgCIgFgXIACAAQAIAGACARIAAAAQABALARAMQAIAFALAGIABAAQAUAKAUgEIAHgCIAEgBQAKgFAJgHIACgBIAOgLQAGAoABAbIABANIgBAJQgJAEgKADQgJADgJABIgEAAQgMAAgLgCQgXgMgVgSIgEAFIgEAEQgUATgZAOgACwFyQgKgVgNgnIgOgrIgJgZIAAgBIgNgmQgGgRgCgSIgCgSIABgSIAAAAIACgNIABgGIgBAGIgCANIgHAAIAAgBIACgNIABgTIAOgDIADAOIAAABIAIAgIAPBEIAGAZIgGgZIgPhEIgIggIAAgBIgDgOIAAAAIgFgQIgHgZIAAgBIgNgoIgGgPIgTgyIgBgEIgBAAIAAgBIgBgBIAAAAIgBgCIAAgCIgFgJIAAgBIgBgBQgNgdgTgeQATAeANAdIABABIAAABIAFAJIAAACIABACIAAAAIABABIAAABIgRgDIgCgGIgBgBIAAAAIAAAAQgFgKgGgJIgWghIgEgFIAEAFIAWAhQAGAJAFAKIAAAAIAAAAIABABIACAGIgFgEIgBgBIgugqQgYgUgVgXQgPgOgLgQIgCgDIgFgJIgCgDIgQgfQABAQACAQIABAFIADANIABAEIACAFQAJAkAPAiIAAAAIgCACIgBgBIgRgUQgQgVgMgWIgBgBIgBgCIgBgCIgMgZQgMgcgFgfIgQADIgMAWQgYAlgfAeIgCADIgDACIgOAMQgPALgQAJQgFADgEABIAogqIAEgEIABAAIABABIABgDIAAgBIAAAAIgBABIgBACIgBAAIgEAEIgoAqQAEgBAFgDQAQgJAPgLIgEAWIgCAKQgJA6AEAeQgfgsgLgwIAAgBIAAAAIAAgCQgJgrAGguQALhMAbgpIABAAIAAgBIABgBQAIgLAIgIQAqgmAngOIARgDIAAAAQAogFAbAAQAfAAAPAGQASgIASgDQALgDANABIABAAIAAAAIABAAIANACQAlAHAeASQAcASAXAXIABACQASASAOAVIAOAXQAYApANAvQAPA7AGA8QAFA3gFA0QgDAlgMAkQgGAQgJAQIgBAEQgFAMAAANQgBAaAIAYIAFAOIAKAXIANAYQAVAjAZAhQgTgEgSgFQgTgFgngDQgIAMgKAKQgFAFgHAEIgGADgACNBpIAAACIABADQAGAaADAaQADAXAAAYQAAgYgDgXQgDgagGgaIgBgDIAAgCIAAAAIgDgOIAAAAIgMgrIAAAAIAAAAIAMArIAAAAIADAOIAAAAgABmgcIAEAUIAAAAIALAbIAHAXIACAGIAIgDIAHgGQAMgNAJgXQAKgagLgfQgJgYgMgDQgDgCgEABQgQADgOAhIgFABIgBgCIAAgBIgFgOIAFAOIAAABIABACIAEARgAjejFQgLANgHAWQAVgXASgaIACgDQAFgIADgJQgDAJgFAIQgNADgKAOgAhmjoIAAAAIAAABIABACIACAFIgCgFIgBgCIAAgBIAAAAIgJgWIAJAWgACPlCIABgCIAAAAgAiWlCIADgCIgBgBgAh8lzIAEgBIgCgCgAj3iJIAAAAg");
	this.shape_37.setTransform(149.7,122.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#BE8552").ss(1,1,1).p("AgOgNIAMAJIAJAAIADAAAAHgEQgBAGAEAGQACACACACQAAABABAB");
	this.shape_38.setTransform(133.4,167.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AAUAVIgngq");
	this.shape_39.setTransform(159.3,175.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.5,1,1).p("ABbgcQgEgCgFgCQgCgBgCAAQgBAAgBAAAA7gRQgEADgFgBQgCAAgDAAQgBAAgBAAABPgaQgIgBgHgCABFgXQgKACgJAAAhOAiQgDgBgDABQgEAAgCgCAguAXQgCgDgCAAQgCAAgBgBQgBAAgBgBAg2AWQgEADgEgEQgBgBgBgBAhFAZQgHACgHgD");
	this.shape_40.setTransform(128.7,148.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#8F6910").ss(1,1,1).p("AgCgJQAKgNASgFQAJgCAJgDQAKgDALgCQASgEATgEQANgCAMgBQAFAAAGABAiJAxQACgFACgDQAEgFAGgFQAGgEAIgDQAJgEAKgC");
	this.shape_41.setTransform(130.6,142.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("ACCnnIgPgjACCnnQABACABADABRnaQAkgIANgFAFcjHIgrAbIgrgyIgMgNIBhgtIAzAyIgZAQQACAJACAJQASBIgGBDQgBAHAAAHIgcAGQADgMACgLQAAgDABgCQAIg5gRg2QgBgCgBgCQgDgKgEgJIAZgPAD7jlIgBgGAFbkYQAAgOgPgMQgPgMgVgXQgWgWiWg3AgNnTQAAABAAABQAFAeAGAfIAAAAQABAGABAGAjWlyQAGAAAGgEQAGgHAHgFQAFgDAEgDAjWk7IAAgOIAAgpQgOAYgIAMQgIANgHAMQgGAJgFAJQgCADgBADQACAAACgBQADgBADgCQAEgDAFgDQABgBACgBQAFgCAFgCQAHgCAGgBQABgBABAAIABAAQACAAADgBIAAAAQAAABAAAAQA2BKgJBTQAHgrAhgwQAggxBWg1QAAAAAAAAQAAgFAAgGAjXk2QAAABABAAQAAABAAAAQABABABABIAAABIAAgBIABABQgBAAAAAAIAAAAAjXk2QAAAAAAgBAjUkyIAAAAQgBgBgBgBQAAgBgBgBAjUkyQgBgJAEgIQAAgDADgDQAFgEAHAAQACAAACgBIAAAAIAAAAIAAAAAjUkyIgDgEAjzkpQgBABgBACQgDAGgDAFQgKARgJARQgHAOgGAPQgFASgEASQgHAdgHAeQgHAggHAfQgIAigHAfQgGAggGAfQgGAbgEAcQgGAogDAoQAAAHACAIQAAABAAAAQAAACABACQgXA/gRCOQgGAogEAvAgRlgQgDgDgGABQgPACgQAGQgRAHgRAHAiSmSQgBABgBACQgBABAAACQgHANgIANQgHAMgKALQgDADgEAGQAAACgBABIgBABQABgCABgCAi+lOQAJgCAIAGQAGADAFAEQAEADAEADAgJlVQAAAYAAAWQAADBAnCFQADAMAEALQADAMAEAMQACAHACAHQAmB7AXBOQAtgFAggIAloDYQA9AUAcAiQAFAGAEAGQAOAZgBAfAjpDwIAAABIABgBgAjsDkQACAGABAGIAAAAAjgErQgGAMgFAMQgEAKgGAKQgCADgBADQgBACgBACQABgHAAgIAjbGMQgCgrgCgqQAAgGgBgGAjbGMQAAACAAADQABAMAAANQAAAFAAAFAj4FdQAAgFgBgGAjzG2QACATAAATQAAAZAIAWAj4FdQAAAjAEAiQAAAEAAAEQAAACAAABAjpDxQAHAcACAeQADgFACgEAGEgrQALBSAJBWQAAADAAACQADAjADAjQAAABAAACQgFgBgEgCQAAABAAgBQgPgDgNgDIgBAAQAAAAAAAAQhAgMg6ARAD7jiIAdDMIAAAFIAPgEIBBgQADvDLQAHgCAIgCIAAAYIABAJAD+DfIhEA5AF0F6IgZAIIgdAKIAyAAIgBAKAF0F6IAMgFAFwGMIAEgSAGAGMIgQAAAAtGMIBHg7IBGg5AAtGMIERAAIk/BuAGVDIIghCyAAtGMIkIAAAAtGMIhHA8");
	this.shape_42.setTransform(161.7,218.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AEUgYQgFgNgFgMQgBgEgCgEQgag/gKguQgNg8gEhMQgDhLgFgqQgCgSgIgZQgEgdgIgbQgehfheg7QgRgLgRgJQhhg0hGAdQhSAigLAKQh7AhgbB8QgCAJgCAIQgLA9AGA8QAAABAAABQAGA+AaA8QADAKAFAJQACgHACgIQABgEACgFQAIghAJgiQALgmAJgnACYCTQAIAKAGALQAJAOAHAPQAFAKAFAJQAGAKAFAKQAFALAGAKQAFAKAGAKQAJARAKARQAEAHAFAGQADAEADADQAEAFAFgFQAAgMABgNQAAgRAAgSQABgMAAgMQAAgNAAgNQABgNAAgOQAAgOAAgOQABgMABgNQABgRACgSQABgDAIgZQAAgIAAgGQgKgLgKgKQgBgBgBgBQgMgMgHgFQgBgBgBgBQgFgDgEAAQgFABgHgBQgGAAgDANQgBAFgCAFQgCgCgCgCQgtgzgOgUQgHgIgIgLQAHAnAHAmQAAACABACADRAqQgDAIgFAIQgJAQgKAPQgHALgIAKQgEAEgDAEQgBABgHAcQgBAEgBAEIAAAAAAFlXQgQAAgTgBQgfgCgagRQgTgMgTgOQgagSgVgYQgIgIgGgIQAEAKAFAKQAIAQALAOQAUAaAVAYQADAEADAEQgDgCgJgBQgJgBgPgFQgQgEghgLQgigKgQgNQgNgLgMgNQgPgRgBgWQgDAZgDAZQgCAQgDAPQgDAZgIAXQgEAMgFALQgFANgFANQgKAVgLAVQAAAAAAAAQgCADgBADQgDgFgCgFQgBACgBACQgFAQABAQQAEgNAHgNQAJAQAKAQQAQAYAVAVQANAOAPAMQABABACACQADAIADAIQACAJACAIQAsCUgSBGQBUgXASgaQAZAJAcAAQAVgBAVgBQAKgBAKgCAhtjVQABgBABAAQAEgEAGgDQAEgCAFgBQADAAACgBQAEAAAEgBQADgBADAAQAAAAABAAQAGgBAFgCQACAAACgCAhFjjQAAABAAACAA1leQAFgJAHgJIANgDQASAKAPAfQAOAfgVAwAAFleQgBgHgBgHQgCgLgBgLQAAgBAAgCQABANALAKQAFAEADAFQADAFAFADQACABADAAQAEgBACgIQgBAAAAgBQgDgFgCgEAAxlQQABgHADgHQgDgGgEgGAAxlQQgCgFgDgFQgCgFgDgGABgicIgBgBQAAgGgCgGQAAgEgBgDQgBgGgBgFQgCgKgCgKQgEgagIgaQgFgTgGgSQgBgDgBgDQgEgNgFgNQgBgEgCgEAA1leQANAUAIAXQABAEABADQAIAaAIAbQAFARAEARQAIAaAFAaQAGAcAEAbQAFAaACAcQgLgPgNgUQgBgFAAgEQgEgbgFgaQgBgDAAgEAk+kpQABAMACAMQAGAjASAeQACADABACAkfjOQAAABgBACAj3ihQABAAAAgBQAGgGAJgBQAFgBAFgBQADgBADgBQABAAAAAAQADAAACAAAADAhQgEAHgDADQglAVgSgCQgTgCgIgFQgJgGgJgIQgJgJgHgJQgLgLgLgEQgHgDgDgCQgfgFgZgeQgagegJgaQgDgJgCgHQgCgJgBgHQAAgCAAgDQABgNgHgNQgQgagPgaABchtQAEgMAAgOQABgKgBgLAADAhQAGgIAGgHQAHgKAHgIQAEgEAEgFQABgBAAgBQAHgJAGgJQADgEACgDQAIgOAGgLQAHgKANghQABgCABgDABrhXQgDgEgCgDQgFgHgFgIAB1AwQABghgDgeQgCgRgCgSQgCgTgCgSAiOiNQgCAVgEAMQgEAMgFACQgFACgBAEQgBAEgBABQAAABAAABQAAABAAAAQABAJAIAFQAHAEAMAAQALgBAIACAhwJoQgZhYAghqQAkh0ANhyQAAAAAAgBQABgCABgDQAAAAAAgBIABgEACWCQQABACABABAANBeQABgBACgCQAAAAAAAAQABgBAAgBQgDgLgDgLAgHBbQAHgMAJgKQABgBABgBQgBgFgBgFQgDgMgDgMAgTBoQAAAAABAAQAFgCAGgDQACgBABAAQAEgCADgCQAFgCAIgBAhLLWQgNgogMgkQgDgJgDgIQgDgIgCgHAGQK9IgFgaIgKg8IgCgMIgCgIIgzke");
	this.shape_43.setTransform(145.6,168.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A4211E").s().p("ACWBtQgPgRgRgPQgdgZghgTQgggSgjgIQgdgGgfAFQgYAFgXAMIgjAUQgVALgBAVIgFAJQgCgegHgcIAAgBIAAABIAAgBIgDgMIgahKIgGgRIgFgQQAKAEAKACQAmAEAbghQAjAaAvAGQAsAGAngQIBHgaIA9DHQAtgFAggJIhGA6IgKgNg");
	this.shape_44.setTransform(157.3,239.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D82C27").s().p("AiHFxIgEhVIAAgMIAEgJQACgVAUgLIAkgUQAWgMAZgFQAegFAcAGQAkAIAgASQAhATAdAZQASAPAOARIALANIhIA7gAgVBlQgwgGgjgaQgaAhgngEIgUgHQgZhYAhhoQAjh0ANhyIAFgCIABABQA2BKgKBTQAIgrAggwQAhgxBTg1IAAAAIAAAAIAAAuQABDBAoCGIgHAJIAOANIAHAYIAFAOIhIAaQgeAMgfAAIgVgCg");
	this.shape_45.setTransform(153.3,220.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C49162").s().p("AglAhIgEgEQgEgGABgIIADAAIgDAAIgLAAIgMgJQAUgEASgEQASgHACgKQAnAAAmgPQglAqgIAHQgJAHgQADQgTAEgPAGIgBgCg");
	this.shape_46.setTransform(138.7,165.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E3CFA4").s().p("AlHHiQgFgXgGgWQgFgUAIgTIAJAMQAOAZgBAgIgBAPIACgFQABAjADAjIgDAAQgKgggGghgAEeH4IABgDQAMgrAIgsQAHgqgDgrIABgHIAAAAIABAAIAcAHIAAAAIghCxIgZAIIADgKgAjSkSIADgCIAAgBIABgCIgGgWIgCgKIgGgYIAMgPIAOgSQAFgBABgEIADgIIANgSIAFgHIgHgCIAGgOIAIgWIAJgXIAHgVQADgIACgJQADgNABgOIgBgNIAFgBIABAHIACAMIABABQABALgBAKQAAAOgEAMIgCAFQgNAhgHAKIgOAZIAOgZQAHgKANghIACgFIAKAPIABAHIgCAHIgFASQgEATgHASIgJAXIgMAZIgNAYIgNAUQgLAQgMAOQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIACgDg");
	this.shape_47.setTransform(168.1,205.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#474B70").s().p("AhHAmIgEgBQgIgBgEgJIAAgBQAGgGAJgBIAKgCIAGgCIABAAQABAMgEAGQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBABQgDABgDAAIgDAAgAA4gQQgFgBgCgFIAAAAIgBgBIACgBIAKgHIAKgDIAEgBIAIgBIAGgBIAAADQgBAIgDAEQgCAEgDABQgGAEgGAAQgGAAgFgDg");
	this.shape_48.setTransform(129.7,149.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#76782D").s().p("AlDFdQACgfgPgZQACgEAAgCIAAgFIAAgBIABgWQACgwgEgwIAZBMIAEAMIAAAAIAAABQAHAcACAeIgMAYQgEAKgGAKIgDAGIgBgLgAgXBnIgFgOIgHgYQAJAJAJALQAPAVARAQQAUARAVAPQAUAOATARIABgBQAagXASgfIAKgCIALA8IAEAaIgEgaIAFgBQAyACAwgRQAkgOAigRIAGBGIgJAAIAAAAIgcgGIgBAAIAAAAQhAgMg6AQIgPAFIAPgFIAAAZIhEA4QgfAJguAFIg6jJgADcgQIAQgHIAVgLQAQgIANgKIABgBQADADABAAIgEAYIhCAQgAEfgaIAEgYIAGACIASACIgBAOIgbAGIAAAAgAEjgyIAAAAgADjhzIgBgBIgIgYIgIgVQgLgZgNgXIACgCIArAyIArgbIAHATIgKAHIgPAMQgLAKgIAMIgFALQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCAAgAgkjRQgcgjgTgoIAAguIAAAAIACgIIAOAVIAQAdIAKATIALAUIALAVIALAUIARAiIgDAFQgWgPgUgZgAEZipIgHgTIAZgPIAFASQgIAHgJAFIgGAEIAAAAgAlQkYIALgSIAPgZIAWgkIAAApIAAAOIAAAEIgBABIgCAFIAAAAIgDABIgNADIgKAEIgDACIgJAGQgDACgDABIgEABIADgGg");
	this.shape_49.setTransform(169.1,217);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9FA156").s().p("AkjF1Qgcgig+gUIgEACIAAgBQgCgIABgIQADgoAGgoIAJg3IANg+IAPhEIAOg8IAOg8IAJgjQAFgPAHgOIATgiIAHgMIACgCIAKgFIAMgDIADAAIAAABQgMBxgkByQghBqAaBYIAAACIAFAPIAGARQAEAwgBAxIgBAWgADLDdIgCgMIAGgKIgHACIgzkdIAzEdIABAIIgIANQgSAfgZAYIgCABQgTgRgTgOQgVgPgUgRQgTgRgQgUQgIgLgKgJIgGgXQgniHgBi/QATAoAaAiQAUAZAYAQIANAIIgJgOIgUghIgLgUIgLgVIgKgUIgKgTIgOgeIgOgVQAGgbACgCIAGgHQAIgKAGgMIATgeQAFgIADgJIACgJQADgOAHABIALAAQAEgBAFADIADACQAHAFALAMIADADIAUAUIgBAPIgIAcIgEAjIgBAZIgBAbIAAAcIgBAaIAAAYIgBAjIAAAZIAAgZIABgjIAAgYIABgaIAAgcIABgbIABgZIAEgjIAIgcQCXA3AVAWQAVAWAPANQAPAMAAAOIAzAyIgZAPIgZAQIgqAaIgsgxIgLgNIBggtIhgAtIAAAFIAAAAIAAABIABADIACgCIAGAIQAOAXAKAYIAIAVIAJAYIABABQAAABABAAQABAAAAgBQABAAAAAAQABgBAAgBIAGgKQAHgNALgKIAQgMIALgCQAMAlAAAkQAAASgDASQADgSAAgSQAAgkgMglIgBgEIAGgEQAIgGAIgGQARBHgFBCIgSgDIgGgBIAAgEIgEABIgBAAQgOALgPAIIgWAKIgQAIIgGADIgDABIgCAAIgDABIgcjKIAcDKIABAEIAPgDIBBgQIAbgHQAMBVAIBWIABAFQgjARgkANQgvASgygDIgGABgABNg+QAFAGAFgFIgPgHIAFAGgADJDRgADmiDgAjrjhIABgpQAGAAAFgFIAOgMIAJgFIAAAAIALgFIAEgCIAJgEIAMgCIAAAAIgDADIgBACIgCADIgOAaQgIANgJAKQgEADgDAHIgCADIgBAAIgDABQgHAAgFAFg");
	this.shape_50.setTransform(163.7,207.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEE3BC").s().p("AlfKvQARiOAXg/IADgFQA+AUAbAiQgIATAFAUQAGAWAFAWQAGAiAKAgIADAHgABhKRIBHg7IBGg6IBEg4IABAJIgBgJIAAgZQA6gQBAAMIgBAHQADArgHAqQgIAsgMArIgBADIgDAKIgdAKgAiggsIAAAAIABAAIgBgBQAAgJADgIQABgDACgDQAFgEAIAAIADgBIAAAAIAAAAIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAEgGADgDQAKgLAHgMIAPgaIABgDQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAMgOALgPIANgUIANgZIAMgYIAJgXQAHgSAEgTIAFgSIACgIIAEABIACAlIAEAjQADAggBAhIAoAsIAAAAIACAMIgCgMIAAAAIgLg9IAAgCIgBgEIgOhPIAPATQAOAUAtA0IAEAFQgDAIgFAIIgTAfQgHALgIAKIgHAIQgBABgHAcIgCgDIgIAAIAIALQhUA1ggAuQghAxgHArQAJhTg2hIgAh5hFIALAHIAIAGIgIgGIgLgHQgGgFgHAAIAAAAIAAAAIgEABIAAAAIAAAAIAEgBIAAAAIAAAAQAHAAAGAFIAAAAgAAYhdQgPACgOAGIgiAOIAigOQAOgGAPgCIADgBIAAABQAEAAACACQgCgCgEAAIAAgBIAAAAIgDABgAioitQgTgCgIgFQgJgGgJgJIgQgRQgLgLgLgEIgKgFQgfgIgZgdQgagegJgaIgFgQIgDgQIAAgFQABgOgHgMIgfg1IABgCIgEgCQgSgfgGgjIgDgXIAJgXQAIgXADgZIAFgfIAGgyQABAWAPARQAMANANALQAQANAiAKIAxAPIAYAGQAJABADACIgGgIQgWgZgTgaQgLgNgIgQIAFgEQAVAYAaASIAmAZQAaASAfACIAlABIAAgHIgCgPIAJgBQAFAEADAFQADAFAFADIAFABQAEgBACgIIAFALIAFAKIADAIIAJAaIACAGIALAlQAHAaAFAaIAEAUIACAKIgFABIABAOQgBANgDANQgCAJgDAJIgHAVIgJAWIgIAXIgGANIgCAHIgJAVIgBACIgIALIgOASIgMAOIgJALQgiATgSAAIgDAAgAjPkQQgSAHgUAEIAMAJIALAAQgBAHAEAGIAEAEIABACQAPgFASgEQATgEAJgGQAIgIAlgrQgmAPgpAAQgDAKgRAGgAjjkqIAAgBIgOgBIAAAAIAAAAIgCAAIgDABIgCAAIgBAAIAAAAIgBAAQgIgBgGgDIAAAAIgBgBQgIgEgBgJIAAgBIAAgCIACgFQABgEAFgCQAFgCAEgMQADgMADgVQgDAVgDAMQgEAMgFACQgFACgBAEIgCAFIAAACIAAABQABAJAIAEIABABIAAAAQAGADAIABIABAAIAAAAIABAAIACAAIADgBIACAAIAAAAIAAAAIAOABIAAABIAAAAgAlkmOQAFAJAHABIAEABQAFABAFgCQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABgBQAEgGgBgMIAFgBIgFABIgBAAQgBgDgDAAIgDgBIgCgBIACABIADABQADAAABADIgGACIgKACQgJABgGAGIAAAAIgBAAIgCgBIgBAAIAAAAIAAAAIgCABIAAAAIgCAAIgBAAIgEgCIAAAAIAAAAIAEACIABAAIACAAIAAAAIACgBIAAAAIAAAAIABAAIACABIABAAIAAAAIgBABgAlfmXIAEgBIABAAIgBAAIgEABIAAAAIgBAAIgCAAIgGgCIAGACIACAAIABAAIAAAAgAlPmaIADgBIAAAAIABAAIgBAAIAAAAIgDABIAAAAIgBAAIgDgCIgBAAIgCgCIACACIABAAIADACIABAAIAAAAgAjYnDIgCABIAAABIABAAQACAEAFACQALAFALgGQAEgBACgEQADgFABgHIAAgEIABAAIALgCIAEgCIgEACIgLACIgBAAIgGACIgIABIgFABIgJADIgUACIAUgCIgKAHgAlwnUQgIADgGAEQgGAFgEAFIgEAIIAEgIQAEgFAGgFQAGgEAIgDIATgGIgTAGgAjfnCIAGgBIABAAIgBAAIgGABIgBAAIAAAAIgBAAIgBAAIgEAAIgDAAIADAAIAEAAIABAAIABAAIAAAAIABAAgAjFnNQgIgBgHgCQAHACAIABgAjFnUIAEABIAJAEIgJgEIgEgBIgDAAIADAAgAiCoeIgZADIgmAIIgUAFIgSAFQgSAFgMANQAMgNASgFIASgFIAUgFIAmgIIAZgDIACAAIABAAIABAAIAAAAIABAAIAAAAIAFAAIABABIgBgBIgFAAIAAAAIgBAAIAAAAIgBAAIgBAAIgCAAgAlEmaIAAAAgAjOnKIAAAAgAgfoZIgCgHQgIgXgNgUQAEgJAIgJIANgDQASAKANAfQAOAegTAxIgMADIgQg0g");
	this.shape_51.setTransform(156.5,192);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B66616").s().p("AjIDSIgFgQIgFgRIgEgDQgPgMgNgNQgUgWgRgYQgKgQgJgQIAEgFIAAgBQALgVAJgVIALgYIACAWQAGAjATAfIACAEIAfA0QAIANgBAOIAAAEIADAQIAFARQAIAZAaAeQAaAeAfAHIAJAFQAMAFAKALIARARQAJAIAJAGQAIAGATABQAQACAlgUIAJgLIAGAYIACAKIgCADQgLAJgHAMIgFgCIgUADIgpACQgbAAgagJQgRAahUAXQARhGgriWgACrFYQABghgDggIgDgjIgFglIAZAjIgZgjIgBgJQgDgbgGgaIgBgHIAAgBIgCgMIgBgHIgCgLIgEgTQgFgbgHgaIgLgjIgCgGIgJgZIgDgIQAAgIAEgHQANAVAHAWIACAHIAQAzIAKAiQAHAaAGAaIAKA3QAEAbADAbIAOBPIABAFIAAACIAKA8gAEEFOQgtg1gOgTIgPgUQgDgbgEgbIgKg3QgGgagHgaIgKgiIAMgEQAWgugPgfQgOgfgTgKIgMADQgIAJgEAJIgHgLIAHALQgEAHAAAIIgFgLIgGgLIAAgBIgGgJIAGAJIAAABQgCAIgEABIgEgBQgGgDgCgFQgDgFgFgEQgMgKgDgMIABACIAFAWIACAOIAAAHIglgBQgegCgZgRIgngZQgagTgVgYIgNgQQADAKAGAKQAIAQALAOQATAaAVAZIAHAHQgDgBgJgCIgYgGIgygOQghgLgQgNQgNgLgMgNQgPgRgCgVIgGAyIgEAfQgEAYgIAYIgIAWIgLAYQgJAVgLAVIgJgEIAFgPIgNgDQgZg7gGg+IgBgCQgFg8ALg9IADgQQAbh8B8ghQALgLBRgiQBHgdBhA0IAhAUQBeA7AfBfQAIAbAEAeQAIAZACASQAEApAEBLQAEBKANA8QAKAuAaBAIADAHIAKAZIAPAjQgOAGgkAHQgFgDgEABIgLAAQgHgBgDAOIgCAJIgEgEgAkWgcIgSBBIgCAJIACgJIAShBIAUhMIgUBMgAhXmIIAAgBIgBABIAAAAIABAAgAChDPIAAAAgACSAvIAAAAgABsg2IAAAAgABdg9IAAAAg");
	this.shape_52.setTransform(140.1,138.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#8F6910").ss(1,1,1).p("AgLgRQBBg6BXAuAiMAyQABgCACgCQADgEADgEQAEgEAFgDQAPgLASgD");
	this.shape_53.setTransform(129.7,140.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.5,1,1).p("AA9gZQgEgBgCgDQgBgBgCgBAAtgUQgGgDgEgDABPgcQgCAAgCgDQgCgCgBgBABjgdQgFgDgEgDAhRAcQgFACgDgEAhVAjQgHACgDgCQgCAAgBgCAg+AWQgEgBgBgDAhJAYQgEgBgCgD");
	this.shape_54.setTransform(129.7,148.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("Am/l7QgPgTgFgNQgEgNgGgRQgGgSgHgZQgFgUgDgUQAAgCAAgBQgDgVABgVQAAgvAPgtQAEgQAIgQQAAAAAAgBQAAAAAAAAQAMgbATgdQAfgwBCgXQAjgaAogRQA4gXA6AJQAbAGAZAKQACABABAAQAVAJATALQABABABAAQADACAEADQAtAdAlAmQABAEACACQAKAKAHAMQAKAPAIAQQAFALAEAMQAFAMAEAMQAEANADAMQADANADAMQACAMACALQACASACASQABAPADBbQAAAFABAFQACARABARQACAMABAMQACAMACANQACAOACANQACAPADAOQADAPAEAOQAEAOAFANQAEAOAFANQAEAKAEALQAFAJAFAKQAFAKAFAHQAFAIACADQgBgBgBAAQgJACgKADQgJADgJADQgIADgHAEQgBAAgCABQgDgBgEgBQgDAAgDAAQgBAIgDAGQgBADgBACQgVAngcAjQgBACgMAMQAAAIABAIQgBAAABABIAAAAQgBAAAAAAQgBgBgCAAQgSgDgSAHQgQAFgQAKAB1h1QgbgKgFgGQgKgJgJgLQgKgOgJgOQgIgMgHgMQgEgGgDgFQAAADABADQAAABAAABQAAABAAAAQAAAMABALQABAUAEATQACALADArACGiBQAVAGAQASQAJAKAGALQAHAJgFAGQgBACAAACIAAAAQAFgBAGABQAOADAOADQAiAKAfASQApAZAmAaQAUAOASAQQAHAGAGAGIhpAyIAKAMIAyA6IAxgZQAAADABACQALA9gFA2IAAABQgBADAAACQgBAKAAAMIAhgLQAHBSADBoQABAiABAlQgGgCgEgCQgRgFgKAAQgvAAgwgBQgGAAgFABQgPACgMAJQgDgMgCgNQgCgIAAgIQgDgggFggIAAAAQAAAAAAgBQgDgOgDgOQgJgrgKgsQgJgrgJgrQgFgdgHgcQgBgCgFgSAA2gCQAKAHAHAOQARAjASAjQATAiAVAhQADAEADAFQAFAHAJAFQgGgqAFgrQAFgvAHgtQADgUACgVQABgLADgKQAAgBABgCAE8BwIADASIAhDAIABAHIAegJIAvgPAGlA+IA5BBIgiAVQABABAAACQAAAAAAABQAPAiADBdAjbnvQgcgegSgoQgDgIgEgHAhdoKIAHAaQgPABgOACQgtACgjgbQgngegkgjQgEg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");
	this.shape_55.setTransform(155.1,183.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGAAQAAgDgDgEIACAAIAEAAIADAAIAEAAIAGAAQgDAHgBAAQgFAGgJACQADgEgBgEg");
	this.shape_56.setTransform(139.9,146.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A4211E").s().p("Ag5AgQguAJgmAeIgDgDIgBgDIgghfIgKgkIACAHQAhAFApguQALAYAaABQBmAVBag4IALApQAXBRAkBQIghATQhWhih+ATg");
	this.shape_57.setTransform(153.8,238.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D82C27").s().p("AAIFsIgjAAIgkAAIgiAAIgOAAIACgaQACgmgHglIgCgLIgCgJIgBgKIACgCQAmgeAvgIQB+gUBWBiIgeASIgiAXIgfAWIgbATIgOALIgkAAgAihBjIgCgHIgCgHQgPg8ABgaQAEg3AFgYIAUhMIAVhPQAHgaAEghIAGg4QAZApANAvQAEANABAOIADAUIACAUQAJglAZgfQAagiAcgfQATgVAagKQAGgCASgCIABAhIAAAFIABAQIAEBKIADA0IAHA3IAQBfIAKAyIADALIABAFIADANIAAACQhZA4hmgVQgagBgMgXQgkAogfAAIgHAAg");
	this.shape_58.setTransform(151.3,222.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E3CFA4").s().p("AlGISIgBghIgBgcQABgaACgaQABgPAPgZIAAAAQAIASAFAZIACAMIgIAlIgKAqIgFATIgJAAgAC3H/QAngaAqgVQAQgIAPgKQARgLARAIIgMAXQgHAOhpAeIghAKIALgJgAjBkHQAHgNgBgMIAAAAQAAgKgDgKQgEgNgHgMQAHgFAFgHIAVgdIADgEIAKgQIANgVIAFgIIgHgDQARgfAEgjQABgMAAgMQAAgHADgGIAHgBIAAABIABAQIACATIABAEIABAOIADAjIAAAFIABAFQAAABAAAAQgBAAAAABQAAAAABAAQAAABAAAAQgTAtgbAqQgNAUgKAVIgIAPIgKAXQgBABgDABIABgDgAh0nRIgPAfIgGALIAGgLIAPgfQAHgMABgNQgBANgHAMg");
	this.shape_59.setTransform(165.8,205.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#474B70").s().p("AhJAoQgJgCgHgOIAAgBIAFgEIADgBIAOgEQAHgBAGADIAAAIIAAABIgCAGQAAACgEACIgHAEIgFABIgBAAgAAqgaIgBgFQAIgDAIgCIAQgCIACAAIAMgBQACAEABADQABAFgDAEIgcAKIgGABQgJAAgDgOg");
	this.shape_60.setTransform(130.1,149.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#76782D").s().p("Ak4FjIgBgDQgCgXgJgWQAJAWACAXIABADQgJgBgGADIgCAAIAHglIgCgNQgEgZgJgSIAAAAIABgHIABgXQAAgcAKgYIAgBhIABAIQgGAIAJALIACALQgHAHgFALQgFAOgIAIIAAgCgAgSCPIgLgoIAAgDIgDgMIgBgFIgDgMIAHAIIADACIAFAEQAOALALANQAfAiAhAdQAIAHAKAGIACgDQAeghAcgiIAJgBQAGAfACAgIACARIAFAYIgFgYQANAKASgEIAggHQAWgHAUgKQAVgJAUgKQAOgHAOgFIABBHIgKgDQgRgGgKAAIhegBIgMABQgOACgNAJIACAGIAAAGQgMAJgNAIIgbAQIgVALIgYAOIgfAQIgEACQgkhQgWhTgAD3gUQAOgFANgJIAOgKIAGgFIABgBIABABIABAAQAKACAMgBQAEgBADgCIACgBIABAOIgiAKIABgVIgBAVIguAPgADph2IgCgBIgBgCIgDgFIgKgVIgLgYQgHgRgPgPIAIgGIAxA6IAygZIABAFQgLAHgIAIQgOALgMAOIgIALQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgBAAgAgbjPQgUgXgSgZIgKgRIgCgEIgBggIgBgcQALAIAGAOIAjBGQATAjAUAgQgWgKgRgUgAlUkUIABgBIAAAAQAYgmASgpQAHAQADATIADATIAAABIAAABIgBAEIgEgFQgLAKgMAHIgRANIgEACg");
	this.shape_61.setTransform(168.6,217);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9FA156").s().p("AlQFBQgzgOgEgGIAAAAQAEgnAGgnIANhNIAUhhIAMgzIAVhQQAIgcAQgkIALgYIAQgMQAMgIALgJIAEAFIgGA4QgEAggHAaIgVBPIgTBLQgGAXgDA3QgCAdAQA8IACAHIAKAkQgKAYAAAcIgBAWIAAAHQgRgkgfgIgADVEnIgCgRQgCgggFgfIAAAAIAAgBIAAAAIgGgcIgThYIgShVQgFgbgHgdIgGgUIAGAUQAHAdAFAbIASBVIATBYIAGAcIAAAAIAAABIAAAAIgKABQgcAigdAiIgDACQgKgFgIgHQghgegfghQgNgOgOgLIgFgDIgCgDIgHgIIgLgzIgNhfIgHg1IgEg1IgDhKIAKAAQARAZAUAYQAQATAYALIAGAJQAFAGAIAFQgDgWAAgYQAAgTACgTIAMhdIAGgqIAEgVIABgDIgBADIgEAVIgGAqIgMBdQgCATAAATQAAAYADAWQgIgFgFgGIgGgJQgWghgSgjIghhFQgHgOgLgJIAAgFIAAAAIAAgCIAAgPIANgOQAZgjAVgnIADgFQADgGAAgIIAHAAIAHACQAVAGAQASQAIAKAHALQAGAJgEAGIgBAEIAAAAQAFgCAGABIAbAHQAiAKAfASQApAYAnAdQATAOASAQIANALIA6BCIgiAVIgJAEIgKAFIgyAZIgxg6IgLgMIBpgzIhpAzIAEASQAOAOAHARIALAYIAKAVIADAGIABABIACABQAEABACgDIAIgKQAMgOAOgMQAJgIAKgGIAKgGIAEgCIAFgCQAOAiAEBbIgDADQgDACgEAAQgLACgLgDIABgGIAAAAQABgSAAgSQAAgkgHgpQAHApAAAkQAAASgBASIgDAGIgBABIgFAFIgPAKQgNAIgOAGQgOAFgPADIghi9IAhC9IABAIIAegJIAugPIAigLQAHBRADBpQgOAEgOAHQgUALgUAIQgVAKgWAHIggAIIgIABQgNAAgKgIgADlh3gAjsjIIgCgTQgEgTgHgQIAAgGQAdgGAagOQAFgCALgHIAMgKQABAMgHANIgCADQgHAKgNAMQgOANgKALIAAABIgFAGQgIAKgFAJg");
	this.shape_62.setTransform(163.8,206.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEE3BC").s().p("ADRKiIggAAIgjAAIgmAAIgnAAIgmAAIgmAAIgEAAIAPgKIAYgTIAfgXIAigWIAegSIAhgTIAFgDIAegPIAZgPIAUgKIAbgRQAOgIALgJIAAgFIgBgGQAMgJAOgCIAMgBIBfABQAKAAAQAFIgCAJQABAOgCANQgDARgFAQQgFATgIASIgFAMQgRgIgQALQgPAKgRAIQgpAVgnAaIgMAJQgUAGgFAEIgWAAgAEdHtIgBgHIABAHgAj+KiIgfAAIgcAAIgZAAIgjAAIgOgEIA8jWQAEAGAzAOQAfAIARAkIAAABIAAAAQgPAZgCAPQgCAaAAAaIAAAcIACAhIgNAAgAh/BeIgDgVQgBgNgEgOQgNgugZgnIABgFIAAgBQAFgIAIgKIAFgGIAAgBQAKgLAOgNQANgMAHgKQAEgBABgBIAJgXIAIgPQALgVAMgUQAbgqATgtIABAAIABAUIAAAEIACAYIADAZIAGAlQABAGAFAGIAOgIQgCgqgDgMQgEgSgBgUIAAgXIgBgBIAAgCIAAgGIAGAKIAPAYIAUAcQAIAMAKAJQAGAFAbALIgDAFQgVAngbAjIgNAOIAAAPIAAACIAAAAIAAAAIAAAFIABAcQgRABgGADQgYAKgUAVQgdAdgaAhQgZAggKAlIgCgUgAiZhFIAMACQANACAUANQgUgNgNgCIgMgCIgBAAIAAAAIAAAAIABAAIAAAAgAgGhSQgSAGgQALQAQgLASgGIABgBIAAAAQAKgEAMAAIABAAIAAAAIAHAAIADAAIADACIgDgCIgDAAIgHAAIAAAAIgBAAQgMAAgKAEIAAAAIgBABgAjwjLQgsgZgfgYQglgbgJguQgIgjgGgNQgdgogIgaIAAAAIgUg4IgCgHQgDgJABgKIgFgCIABgDQAIgYAHgYIABgDQAKgmACgoIACgTQAYAoAZASQAYASAbANQAZALAqAHIACgHQgcgegSgoIgIgOIADgDQAjAiAoAfQAjAbAsgDIAdgDIgGgZIADgBQAEABADAEIAGAIQAFAFAGAEQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIADAAIAAgDQACgFAAgGQAAAFAEACIAEACIABABIACAHIAAAAIAFAUIAGAUIABAFIAFAVIAHAgIAFAUIACAPIABACQADARACARIADAVIgHABQgCAGAAAHQAAAMgCAMQgEAjgQAfIAGADIgEAIIgNAVIgLAQIgDAEIgVAdQgFAHgHAFQggAUgcAAQgkAAgbgigAkak9IABALIABACQAQAMAUABIAKAAIgKAAQgUgBgQgMIgBgCIgBgLIABgEIACgCQAEgBAEgFIAEgHIAEgOQACgFABgGQAAgFgCgFQACAFAAAFQgBAGgCAFIgEAOIgEAHQgEAFgEABIgCACIgBAEIAAAAgAlqmJQAHAPAJABQADABADgCIAHgDQAEgCABgDIABgFIAAgBIAAgJQgGgCgGABIgPAEIgCABIgGAEIAAAAIgBABIgEABIgBAAIAAAAIgDgBIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIABAAIADABIAAAAIABAAIAEgBIABgBIAAAAgAlomPIACAAIAAAAIAAAAIgCAAIgBAAIAAAAQgDAAgCgDQACADADAAIAAAAIABAAgAldmUQgEgBgCgCQACACAEABgAlTmVQgDgBgBgEQABAEADABgAjnnBIABACIABADQAFASANgFIAcgKQAKgCAGgGQABgBADgIIgGAAIgHAAIgIgGIAIAGIgCAAIgEAAIgCAAIgLABIgEgDIgEgEIAEAEIAEADIgDAAIgPADQgJACgIADQgGgDgDgEQADAEAGADIgBAAgAjcnKQADADAEABQgEgBgDgDIgDgCIADACgAgZndIgIggIgHgZIgMgjIgDgIIgBgCIAAgCQACgJAGgGQAFgFAGgDQAFgDAGABQAFAAADAEQAGAHADAIQAFALACANQACAOgBANQgBAOgEANIgHAaIgEARIgBAEIgDAAIgEgPg");
	this.shape_63.setTransform(157.4,191.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B66616").s().p("AilGpIACghIAAgYIgCgaIgFgbIgGgcIgHgZIgGgVIgKgjIgCgHIgDgOQgCgHgEgGIgDgDIgQgPQgNgLgIgKIgTgZIgNgVIgGgJIgFgBIAAgBIADgIIAGgYIgIASQgPgTgFgNIgKgeIgNgpQgFgUgDgUIAAgDQgDgVABgVQAAgvAPgtQAFgQAHgQIAAgBIAAAAQANgbASgdQAfgwBCgXQAjgaAogRQA4gXA6AJQAZAGAZAKIADABQAVAJATALIACABIAHAFQAtAdAnAmIADAGQAKAKAHAMQAKAPAIAQQAFALAEAMQAFAMAEAMIAHAZIAGAZIAEAXIAEAkQABAPADBbIABAIIADAiIADAYIAEAZIAEAbIAFAdIAHAdIAJAbIAJAbIAIAVIAKATIAKARIAHALIgCgBIgTAFIgSAGIgPAHIgDABIgHgCIgGAAQgBAIgDAGQgagKgGgGQgKgJgJgLIgTgcIgPgYIgHgLIABAGIAAACIAAABIABAXQABAUAEATQACALADArIgOAHQgHgGgCgGIgFglIgDgZIgCgYIgBgEIgBgUIAAgDIgBgFIAAgFIgDgjIgCgOIAAgEIgCgTIgBgQIAAAAIgDgWQgCgRgEgRIAAgCIgDgPIgEgUIgIgfIgFgUIgBgFIgFgUIgGgUIAAAAIgCgHIgCgJIACAJIgBAAIgDgDQgEgCAAgEQgBAFgCAFIAAADIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgGgEgEgFIgGgIQgEgEgEgBIgDABIAHAaIgdADQgrACgjgbQgngegkgjIgIgIIAIAIIgCADIAHAPQASAoAcAeIgBAGQgqgHgagLQgagNgZgSQgZgRgXgoIgDATQgBAngLAmIgBADQgGAYgJAYIgBADIAAAAIAAABIgBABIgIgDIAAgDIACgKIAFgqIAHgxIgHAxIgFAqIgCAKIAAADIgHAhIAAAAIAAABIgEANIAGgMIAAgBIAAAAIABgBIAMgeIAAAAIABgBIAAgBIAAAAIAFACQgBAIADAJIACAHIAUA5IAAAAQAIAZAeAoQAFANAIAjQAKAuAkAbQAfAYAtAaQAwA7BJguQAHAMAEANIgEADQgFAHgEAIIgBADIgDAAIgCABIgIACIgMACQgNABgMAAQgMAAgOgCIgigEQgFAAgBgFIgZAQIgfATIgZAOIgNAJIgLAKIAAgOgAC0DhIAAAAIAAgDQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABgAC0DeIAAgBIAAgBIgCgYIgDgaIAAgCIgEgeIgGgfIgHggIgEgRIAAAAIAAgBIAEAAIAAgEIAFgQIAHgaQAEgMABgOQABgNgCgOQgCgMgFgMQgDgIgGgHQgEgEgFAAQgFgBgFADQgGADgFAFQgHAHgBAIIgBACIACACIADAIIALAjIAIAYIAIAfIADAPIAAABIAAAAIAEARIAHAgIAGAfIAEAeIAAACIADAaIACAYIAAABIAAABgAkYiyIABgBIgCAAgAhziMIAAAAg");
	this.shape_64.setTransform(139.6,139.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(0.5,1,1).p("AA9gZQgEgBgCgDQgBgBgCgBAAtgUQgGgDgEgDABPgcQgCAAgCgDQgCgCgBgBABjgdQgFgDgEgDAhVAjQgHACgDgCQgCAAgBgCAhRAcQgFACgDgEAhJAYQgEgBgCgDAg+AWQgEgBgBgD");
	this.shape_65.setTransform(129.7,148.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("Am/l7QgPgTgFgNQgEgNgGgRQgGgSgHgZQgFgUgDgUQAAgCAAgBQgDgVABgVQAAgvAPgtQAEgQAIgQQAAAAAAgBQAAAAAAAAQAMgbATgdQAfgwBCgXQAjgaAogRQA4gXA6AJQAbAGAZAKQACABABAAQAVAJATALQABABABAAQADACAEADQAtAdAlAmQABAEACACQAKAKAHAMQAKAPAIAQQAFALAEAMQAFAMAEAMQAEANADAMQADANADAMQACAMACALQACASACASQABAPADBbQAAAFABAFQACARABARQACAMABAMQACAMACANQACAOACANQACAPADAOQADAPAEAOQAEAOAFANQAEAOAFANQAEAKAEALQAFAJAFAKQAFAKAFAHQAFAIACADQgBgBgBAAQgJACgKADQgJADgJADQgIADgHAEQgBAAgCABQgDgBgEgBQgDAAgDAAQgBAIgDAGQgBADgBACQgVAngcAjQgBACgMAMQAAAIABAIQgBAAABABIAAAAQgBAAAAAAQgBgBgCAAQgSgDgSAHQgQAFgQAKAB1h1QgbgKgFgGQgKgJgJgLQgKgOgJgOQgIgMgHgMQgEgGgDgFQAAADABADQAAABAAABQAAABAAAAQAAAMABALQABAUAEATQACALADArACGiBQAVAGAQASQAJAKAGALQAHAJgFAGQgBACAAACIAAAAQAFgBAGABQAOADAOADQAiAKAfASQApAZAmAaQAUAOASAQQAHAGAGAGIhpAyIAKAMIAyA6IAxgZIALgFQAAACAAACAA2gCQAKAHAHAOQARAjASAjQATAiAVAhQADAEADAFQAFAHAJAFQgGgqAFgrQAFgvAHgtQADgUACgVQABgLADgKQAAgBABgCAE8BwIADASIAhDAIABAHIAegJIAvgPIAhgLQAHBSADBoQABAiABAlQgGgCgEgCQgRgFgKAAQgvAAgwgBQgGAAgFABQgPACgMAJQgDgMgCgNQgCgIAAgIQgDgggFggIAAAAQAAAAAAgBQgDgOgDgOQgJgrgKgsQgJgrgJgrQgFgdgHgcQgBgCgFgSAGlA+IA5BBIgiAVQABABAAACQAAAAAAABQAPAiADBdAjbnvQgcgegSgoQgDgIgEgHAhdoKIAHAaQgPABgOACQgtACgjgbQgngegkgjQgEgEgEgEAiNl8QgDAAgDAAQgDAAgDAAQgCAAgBAAQgCABgCAAQgBAAgBAAQgGAAgFAAQgCABgBAAQgIAAgHACQgJACgHADQgBAAAAABQAAAAAAABAm3mNQADgGADgGQAAgBAAAAQAAAAAAAAQAAgBABAAQAGgQAGgPQAAgBAAAAQAAAAABgBQAAAAAAgBIAAAAQAAgBABgCQAJgYAGgYQABgBAAgCQALgmABgnQAAgBADgSQAXAoAZARQAYASAbANQAZALArAHAAZjbQAAgBAAgBQAAgMgCgMQgBgNgCgNQAAgBAAgBQgCgPgCgPQgDgPgDgQQgDgQgEgQQgCgJgBgIQAAAAAAgBQgBgHgBgIQgEgPgEgQQgDgNgFgNQgFgSgGgRQgCgEgBgEQgBgBgBgBQAAgBABgBQABgIAHgHQAFgFAGgDQAFgDAFABQAEAAADAEQAGAHADAIQAFAMACAMQACAOgBANQgBAOgEAOQgDANgEANQgDAIgCAIQAAACAAACAhaoLQAEABAEAEQADAEADAEQAEAFAGAEQACABADgBQABAAABAAAgwn5QgBgEgBgFAg7n4QACgFABgFQAAAEAEACQACACABABQAAAAABAAAgCkMQAAgCAAgCQgBgKgBgJQgBgIAAgIIAAAAQgCgLgBgLQgCgRgEgRQAAgBAAgBQgCgIgBgHQgCgKgCgKQgEgQgEgPQgCgLgDgLQAAgCgBgDQgCgKgDgKQgEgKgCgKQAAAAAAAAQgBgDgBgEAm3mNQACgGACgHQgBgBABAAQgBAAABAAQADgRAEgSQAAgBAAgCQABgFABgFQACgTADgXQADgXAEgaAm3mNQgDAMgDAMQgCAEgBAEIAAABQAAAAgBABQgDgEACgEQABgDABgDQAAgBABgBAhThWQgCACgCABQgFAHgEAIQgBACAAABQgCAAgBAAQgBABgBAAQgEABgEABQgGABgGABQgNABgMAAQgOAAgOgCQgRgCgRgCQgFAAgBgFQgMAIgNAIQgPAKgQAJQgNAHgMAHQgHAEgGAFQgFAFgGAFQAAgIAAgGQACgQAAgRQABgMgBgMQAAgNgCgNQgCgNgDgOQgDgOgDgOQgDgMgEgNQgCgKgEgLQgFgSgFgRQgBgEgBgDQgCgHgBgHQgCgHgEgGQgBgCgCgBQgGgHgKgIQgNgLgIgKQgJgKgKgPQgHgKgGgLQgDgEgDgFAm3mNQgEAJgEAJAmem7QgBAKADAJQABAEABADIAUA5IAAAAQAIAZAeAoQAFANAIAjQAJAuAlAbQAfAYAtAaQAwA7BLguQAGgFAGgHQAKgOALgPQABgCACgCQAFgIAFgIQAHgKAGgLQACgEACgDQADgGAEgGQAIgPAHgQQAGgMABgNAAXhUQgHgGgCgGQgDgSgCgTQgCgMgBgNQgBgMgBgMQgBgCAAgCQgBgKAAgKQAAgBAAgCQgBgCAAgDQAAgCAAgDQgBgRAAgSQgBgHgBgHAAZjbQAAACAAABQAAAAAAAAQgBgBABgCgAkwlCQgGgDgHABQgHABgHADQgCAAgBABQgDACgDACAjwklQAEALgEALQgCAGgDAHQgBAEgDAEQgDAEgFACQgBAAgBABQgBABAAADQAAAFABAGQABACABABQAQAMAUAAQAFAAAFAAAjCA9QgCACgCABQgHAGgHAFQgDACgCACQgJAIAEgFQACgDACgDQAHgJAGgKQAAgBAAAAQAAAAABAAQAYgmASgnQAHAQADARQABAHABAMIAAABQAFgJAIgKQACgDADgDQAAAAABAAQAAAAABAAQAGABAFABQAOACAUANAibAgQgKAJgMAIQgJAGgIAGQgGAMgFAMQgQAkgHAcQgKAogLAoQgHAbgGAaQgKAxgJAwQgHAngHAnQgGAngEAmQAAAAABAAQADAHAzANQAfAIARAlAiWAlQAAgDAAgCIAAAAAiYKMQgBgGgBgGQgBgEgBgEQgBgFAAgFQAAgDAAgCIgBgDIghhhIgKgkIgCgHQgQg8ACgcQADg4AGgXQAFgXAPg1QAOg2AHgaQAGgaAEggQAEgeADgaAA2gHQgBADABACQAAAMABAOQgSACgGACQgaAKgRAVQgeAfgaAiQgZAfgJAlQgBgLgBgJQgCgKgBgKQgBgOgEgNQgNgvgZgpAhThWQACAKABAKQAAAAAAABQgHAFgFAEQgKAHgFADQgbANgcAHAhQhBQABALgHANQgBABgBACQgHALgMALQgOANgKAJQgBABAAAAAA3AYQAAAQABARQAAACAAADQAAAIABAIQABAlADAlQABAaACAaQADAcAEAbQAHAwAJAvQAEAaAGAZQABAGACAGQAAADABACQABAHACAGAhehvQAHAMAEANAmDM7IAVhKQgGAAgGAAAluLxIABgFIA9jWAjSLxQgFAAgEAAQgGAAgGAAQgQAAgQAAQgNAAgOAAQgNAAgMAAQgSAAgRAAQgJAAgHAAAAGLxQgQAAgSAAQgSAAgTAAQgSAAgSAAQgRAAgRAAQgHAAgHAAQgBAMgCAMACvKBIgiATQgOAJgPAJQgRALgRAMQgQALgPALQgNAJgOAKQgHAFgHAGQABAAACAAQAUAAAUAAQAUAAATAAQATAAAUAAQATAAASAAQASAAARAAQARAAAQAAQAKAAALAAQADAAAEAAQACAAACAAQAHAAAHAAQAFAAAFAAQAMAAAMAAQAAAAABAAQAMAAANAAQALAAAKAAQARAAARAAQgiAChLADQgTABgIgBQgFgBgBgBQgBgBADgCAAGLxQgEACgCADQgMAKgNALAiyKxQABABAAACQAIgJAFgNQAEgLAIgHAi9KCQAJAVACAYQAAABAAABQgJAAgFACQgBABgCgBAi9KCQABAGABAGQgEATgEASQgFAVgFAWQgCAJgDAKQAFAAAFAAQAQAAAQAAQAKAAAJAAQABgNABgNQABgmgGglAjcMSQgDAGgCAHQgPApgKAqAjaMJQAEgMAEgMAjKJXQAIASAFAZAG0CYIAIgEAGpCdQAAADABACQALA9gFA2IAAABQgBADAAACQgBAKAAAMAHPEZQAAAGAAAHABoG1QAGAVAFAUQAYBTAkBQQACgBACgBQAPgIAPgIQANgHAMgHQAKgGAKgFQAOgIAOgJQANgIAMgJQgBgCABgDAEzI0QAAAEABADAHPIsQAAAOgCAOQgCAQgFAQQgFATgIASQgDAGgDAGQgFALgGAMQgHAOhpAeQgUAFgOAFQgUAHgFAEAGJLxQABACABgCAGJLxQAAAAABAAQAAAAABAAQAOAAAOAAQAOAAAPAAQASAAASAAIAOAA");
	this.shape_66.setTransform(155.1,183.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E3CFA4").s().p("AlGISIgBghIgBgcQABgaACgaQABgPAPgZIAAAAQAIASAFAZIACAMIgIAlIgKAqIgFATIgJAAgAC3H/QAngaAqgVQAQgIAPgKQARgLARAIIgMAXQgHAOhpAeIghAKIALgJgAjBkHQAHgNgBgMIAAAAQAAgKgDgKQgEgNgHgMQAHgFAFgHIAVgdIADgEIAKgQIANgVIAFgIIgHgDQARgfAEgjQABgMAAgMQAAgHADgGIAHgBIAAABIABAQIACATIABAEQgBANgHAMIgPAfIgGALIAGgLIAPgfQAHgMABgNIABAOIADAjIAAAFIABAFQAAABAAAAQgBAAAAABQAAAAABAAQAAABAAAAQgTAtgbAqQgNAUgKAVIgIAPIgKAXQgBABgDABIABgDg");
	this.shape_67.setTransform(165.8,205.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9FA156").s().p("AlQFBQgzgOgEgGIAAAAQAEgnAGgnIANhNIAUhhIAMgzIAVhQQAIgcAQgkIALgYIAQgMQAMgIALgJIAEAFIgGA4QgEAggHAaIgVBPIgTBLQgGAXgDA3QgCAdAQA8IACAHIAKAkQgKAYAAAcIgBAWIAAAHQgRgkgfgIgADVEnIgCgRQgCgggFgfIAAAAIAAgBIAAAAIgGgcIgThYIgShVQgFgbgHgdIgGgUIAGAUQAHAdAFAbIASBVIATBYIAGAcIAAAAIAAABIAAAAIgKABQgcAigdAiIgDACQgKgFgIgHQghgegfghQgNgOgOgLIgFgDIgCgDIgHgIIgLgzIgNhfIgHg1IgEg1IgDhKIAKAAQARAZAUAYQAQATAYALIAGAJQAFAGAIAFQgDgWAAgYQAAgTACgTIAMhdIAGgqIAEgVIABgDIgBADIgEAVIgGAqIgMBdQgCATAAATQAAAYADAWQgIgFgFgGIgGgJQgWghgSgjIghhFQgHgOgLgJIAAgFIAAAAIAAgCIAAgPIANgOQAZgjAVgnIADgFQADgGAAgIIAHAAIAHACQAVAGAQASQAIAKAHALQAGAJgEAGIgBAEIAAAAQAFgCAGABIAbAHQAiAKAfASQApAYAnAdQATAOASAQIANALIhpAzIAEASQAOAOAHARIALAYIAKAVIADAGIABABIACABQAEABACgDIAIgKQAMgOAOgMQAJgIAKgGIAKgGIAEgCIAFgCQAOAiAEBbIgDADQgDACgEAAQgLACgLgDIABgGIAAAAQABgSAAgSQAAgkgHgpQAHApAAAkQAAASgBASIgDAGIgBABIgFAFIgPAKQgNAIgOAGQgOAFgPADIghi9IAhC9IABAIIAegJIAugPIAigLQAHBRADBpQgOAEgOAHQgUALgUAIQgVAKgWAHIggAIIgIABQgNAAgKgIgADwhrIgLgMIBpgzIA6BCIgiAVIgJAEIgKAFIgyAZgAjsjIIgCgTQgEgTgHgQIAAgGQAdgGAagOQAFgCALgHIAMgKQABAMgHANIgCADQgHAKgNAMQgOANgKALIAAABIgFAGQgIAKgFAJg");
	this.shape_68.setTransform(163.8,206.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B66616").s().p("AilGpIACghIAAgYIgCgaIgFgbIgGgcIgHgZIgGgVIgKgjIgCgHIgDgOQgCgHgEgGIgDgDIgQgPQgNgLgIgKIgTgZIgNgVIgGgJIgFgBIAAgBIADgIIAGgYIAGgMIAAgBIAAAAIABgBIAMgeIAAAAIgIgDIAAgDIACgKIAFgqIAHgxIgHAxIgFAqIgCAKIAAADIgHAhIAAAAIAAABIgEANIgIASQgPgTgFgNIgKgeIgNgpQgFgUgDgUIAAgDQgDgVABgVQAAgvAPgtQAFgQAHgQIAAgBIAAAAQANgbASgdQAfgwBCgXQAjgaAogRQA4gXA6AJQAZAGAZAKIADABQAVAJATALIACABIAHAFQAtAdAnAmIADAGQAKAKAHAMQAKAPAIAQQAFALAEAMQAFAMAEAMIAHAZIAGAZIAEAXIAEAkQABAPADBbIABAIIADAiIADAYIAEAZIAEAbIAFAdIAHAdIAJAbIAJAbIAIAVIAKATIAKARIAHALIgCgBIgTAFIgSAGIgPAHIgDABIgHgCIgGAAQgBAIgDAGQgagKgGgGQgKgJgJgLIgTgcIgPgYIgHgLIABAGIAAACIAAABIABAXQABAUAEATQACALADArIgOAHQgHgGgCgGIgFglIgDgZIgCgYIgBgEIgBgUIAAgDIgBgFIAAgFIgDgjIgCgOIAAgEIgCgTIgBgQIAAAAIgDgWQgCgRgEgRIAAgCIgDgPIgEgUIgIgfIgFgUIgBgFIgFgUIgGgUIAAAAIgCgHIgCgJIACAJIgBAAIgDgDQgEgCAAgEQgBAFgCAFIAAADIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgGgEgEgFIgGgIQgEgEgEgBIgDABIAHAaIgdADQgrACgjgbQgngegkgjIgIgIIAIAIIgCADIAHAPQASAoAcAeIgBAGQgqgHgagLQgagNgZgSQgZgRgXgoIgDATQgBAngLAmIgBADQgGAYgJAYIgBADIAAAAIAAABIgBABIABgBIAAgBIAAAAIAFACQgBAIADAJIACAHIAUA5IAAAAQAIAZAeAoQAFANAIAjQAKAuAkAbQAfAYAtAaQAwA7BJguQAHAMAEANIgEADQgFAHgEAIIgBADIgDAAIgCABIgIACIgMACQgNABgMAAQgMAAgOgCIgigEQgFAAgBgFIgZAQIgfATIgZAOIgNAJIgLAKIAAgOgAC0DhIAAAAIAAgDQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABgAC0DeIAAgBIAAgBIgCgYIgDgaIAAgCIgEgeIgGgfIgHggIgEgRIAAAAIAAgBIAEAAIAAgEIAFgQIAHgaQAEgMABgOQABgNgCgOQgCgMgFgMQgDgIgGgHQgEgEgFAAQgFgBgFADQgGADgFAFQgHAHgBAIIgBACIACACIADAIIALAjIAIAYIAIAfIADAPIAAABIAAAAIAEARIAHAgIAGAfIAEAeIAAACIADAaIACAYIAAABIAAABgAkYiyIABgBIgCAAgAhziMIAAAAg");
	this.shape_69.setTransform(139.6,139.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.5,1,1).p("AA9gZQgEgBgCgDQgBgBgCgBAAtgUQgGgDgEgDABPgcQgCAAgCgDQgCgCgBgBABjgdQgFgDgEgDAhVAjQgHACgDgCQgCAAgBgCAhRAcQgFACgDgEAg+AWQgEgBgBgDAhJAYQgEgBgCgD");
	this.shape_70.setTransform(129.7,148.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("Am/l7QgPgTgFgNQgEgNgGgRQgGgSgHgZQgFgUgDgUQAAgCAAgBQgDgVABgVQAAgvAPgtQAEgQAIgQQAAAAAAgBQAAAAAAAAQAMgbATgdQAfgwBCgXQAjgaAogRQA4gXA6AJQAbAGAZAKQACABABAAQAVAJATALQABABABAAQADACAEADQAtAdAlAmQABAEACACQAKAKAHAMQAKAPAIAQQAFALAEAMQAFAMAEAMQAEANADAMQADANADAMQACAMACALQACASACASQABAPADBbQAAAFABAFQACARABARQACAMABAMQACAMACANQACAOACANQACAPADAOQADAPAEAOQAEAOAFANQAEAOAFANQAEAKAEALQAFAJAFAKQAFAKAFAHQAFAIACADQgBgBgBAAQgJACgKADQgJADgJADQgIADgHAEQgBAAgCABQgDgBgEgBQgDAAgDAAQgBAIgDAGQgBADgBACQgVAngcAjQgBACgMAMQAAAIABAIQgBAAABABIAAAAQgBAAAAAAQgBgBgCAAQgSgDgSAHQgQAFgQAKAB1h1QgbgKgFgGQgKgJgJgLQgKgOgJgOQgIgMgHgMQgEgGgDgFQAAADABADQAAABAAABQAAABAAAAQAAAMABALQABAUAEATQACALADArACGiBQAVAGAQASQAJAKAGALQAHAJgFAGQgBACAAACIAAAAQAFgBAGABQAOADAOADQAiAKAfASQApAZAmAaQAUAOASAQQAHAGAGAGIhpAyIAKAMIAyA6IAxgZQAAADABACQALA9gFA2IAAABQgBADAAACQgBAKAAAMIAhgLQAHBSADBoQABAiABAlQgGgCgEgCQgRgFgKAAQgvAAgwgBQgGAAgFABQgPACgMAJQgDgMgCgNQgCgIAAgIQgDgggFggIAAAAQAAAAAAgBQgDgOgDgOQgJgrgKgsQgJgrgJgrQgFgdgHgcQgBgCgFgSAA2gCQAKAHAHAOQARAjASAjQATAiAVAhQADAEADAFQAFAHAJAFQgGgqAFgrQAFgvAHgtQADgUACgVQABgLADgKQAAgBABgCAE8BwIADASIAhDAIABAHIAegJIAvgPAGlA+IA5BBIgiAVQABABAAACQAAAAAAABQAPAiADBdAjbnvQgcgegSgoQgDgIgEgHAhdoKIAHAaQgPABgOACQgtACgjgbQgngegkgjQgEgEgEgEAiNl8QgDAAgDAAQgDAAgDAAQgCAAgBAAQgCABgCAAQgBAAgBAAQgGAAgFAAQgCABgBAAQgIAAgHACQgJACgHADQgBAAAAABQAAAAAAABAm3mNQADgGADgGQAAgBAAAAQAAAAAAAAQAAgBABAAQAGgQAGgPQAAgBAAAAQAAAAABgBQAAAAAAgBIAAAAQAAgBABgCQAJgYAGgYQABgBAAgCQALgmABgnQAAgBADgSQAXAoAZARQAYASAbANQAZALArAHAAZjbQAAgBAAgBQAAgMgCgMQgBgNgCgNQAAgBAAgBQgCgPgCgPQgDgPgDgQQgDgQgEgQQgCgJgBgIQAAAAAAgBQgBgHgBgIQgEgPgEgQQgDgNgFgNQgFgSgGgRQgCgEgBgEQgBgBgBgBQAAgBABgBQABgIAHgHQAFgFAGgDQAFgDAFABQAEAAADAEQAGAHADAIQAFAMACAMQACAOgBANQgBAOgEAOQgDANgEANQgDAIgCAIQAAACAAACAhaoLQAEABAEAEQADAEADAEQAEAFAGAEQACABADgBQABAAABAAAgwn5QgBgEgBgFAg7n4QACgFABgFQAAAEAEACQACACABABQAAAAABAAQABAEABADQAAAAAAAAQACAKAEAKQADAKACAKQABADAAACQADALACALQAEAPAEAQQACAKACAKQABAHACAIQAAABAAABQAEARACARQABALACALIAAAAQAAAIABAIQABAJABAKQAAACAAACAm3mNQACgGACgHQgBgBABAAQgBAAABAAQADgRAEgSQAAgBAAgCQABgFABgFQACgTADgXQADgXAEgaAm3mNQgDAMgDAMQgCAEgBAEIAAABQAAAAgBABQgDgEACgEQABgDABgDQAAgBABgBAm7lrQADAFADAEQAGALAHAKQAKAPAJAKQAIAKANALQAKAIAGAHQACABABACQAEAGACAHQABAHACAHQABADABAEQAFARAFASQAEALACAKQAEANADAMQADAOADAOQADAOACANQACANAAANQABAMgBAMQAAARgCAQQAAAGAAAIQAGgFAFgFQAGgFAHgEQAMgHANgHQAQgJAPgKQANgIAMgIQABAFAFAAQARACARACQAOACAOAAQAMAAANgBQAGgBAGgBQAEgBAEgBQABAAABgBQABAAACAAQAAgBABgCQAEgIAFgHQACgBACgCQgEgNgHgMQhLAugwg7QgtgagfgYQglgbgJguQgIgjgFgNQgegogIgZIAAAAIgUg5QgBgDgBgEQgDgJABgKAm3mNQgEAJgEAJAAXhUQgHgGgCgGQgDgSgCgTQgCgMgBgNQgBgMgBgMQgBgCAAgCQgBgKAAgKQAAgBAAgCQgBgCAAgDQAAgCAAgDQgBgRAAgSQgBgHgBgHAhehvQAGgFAGgHQAKgOALgPQABgCACgCQAFgIAFgIQAHgKAGgLQACgEACgDQADgGAEgGQAIgPAHgQQAGgMABgNAAZjbQAAACAAABQAAAAAAAAQgBgBABgCgAkwlCQgGgDgHABQgHABgHADQgCAAgBABQgDACgDACAjwklQAEALgEALQgCAGgDAHQgBAEgDAEQgDAEgFACQgBAAgBABQgBABAAADQAAAFABAGQABACABABQAQAMAUAAQAFAAAFAAAjCA9QgCACgCABQgHAGgHAFQgDACgCACQgJAIAEgFQACgDACgDQAHgJAGgKQAAgBAAAAQAAAAABAAQAYgmASgnQAHAQADARQABAHABAMIAAABIAAAAQAAACAAADQAZApANAvQAEANABAOQABAKACAKQABAJABALQAJglAZgfQAagiAegfQARgVAagKQAGgCASgCQAAAQABARQAAACAAADQAAAIABAIQABAlADAlQABAaACAaQADAcAEAbQAHAwAJAvQAEAaAGAZQABAGACAGQAAADABACQABAHACAGAibAgQgKAJgMAIQgJAGgIAGQgGAMgFAMQgQAkgHAcQgKAogLAoQgHAbgGAaQgKAxgJAwQgHAngHAnQgGAngEAmQAAAAABAAQADAHAzANQAfAIARAlAiYKMQgBgGgBgGQgBgEgBgEQgBgFAAgFQAAgDAAgCIgBgDIghhhIgKgkIgCgHQgQg8ACgcQADg4AGgXQAFgXAPg1QAOg2AHgaQAGgaAEggQAEgeADgaAiWAgQAFgJAIgKQACgDADgDQAAAAABAAQAAAAABAAQAGABAFABQAOACAUANAA2gHQgBADABACAhQhBQAAgBAAAAQgBgKgCgKAhQhBQgHAFgFAEQgKAHgFADQgbANgcAHAhQhBQABALgHANQgBABgBACQgHALgMALQgOANgKAJQgBABAAAAAA3AYQgBgOAAgMAmDM7IAVhKQgGAAgGAAAluLxQAHAAAJAAQARAAASAAQAMAAANAAQAOAAANAAQAQAAAQAAQAGAAAGAAQAEAAAFAAQADgKACgJQAFgWAFgVQAEgSAEgTQgBgGgBgGQAJAVACAYQAAABAAABQABABAAACQAIgJAFgNQAEgLAIgHAkwIWIg9DWIgBAFAAGLxQgQAAgSAAQgSAAgTAAQgSAAgSAAQgRAAgRAAQgHAAgHAAQgBAMgCAMAD9LxQgLAAgKAAQgQAAgRAAQgRAAgSAAQgSAAgTAAQgUAAgTAAQgTAAgUAAQgUAAgUAAQgCAAgBAAQgEACgCADQgMAKgNALACvKBIgiATQgOAJgPAJQgRALgRAMQgQALgPALQgNAJgOAKQgHAFgHAGAjDKzQACABABgBQAFgCAJAAAjSLxQAFAAAFAAQAQAAAQAAQAKAAAJAAQABgNABgNQABgmgGglAjcMSQgDAGgCAHQgPApgKAqAjaMJQAEgMAEgMAjKJXQAIASAFAZAG0CcQAAgCAAgCIAIgEAGpCdIALgFAHPEZQAAAGAAAHABoG1QAGAVAFAUQAYBTAkBQQACgBACgBQAPgIAPgIQANgHAMgHQAKgGAKgFQAOgIAOgJQANgIAMgJQgBgCABgDAEzI0QAAAEABADAHPIsQAAAOgCAOQgCAQgFAQQgFATgIASQgDAGgDAGQgFALgGAMQgHAOhpAeQgUAFgOAFQgUAHgFAEQADAAAEAAQACAAACAAQAHAAAHAAQAFAAAFAAQAMAAAMAAQAAAAABAAQAMAAANAAQALAAAKAAQARAAARAAQgiAChLADQgTABgIgBQgFgBgBgBQgBgBADgCAGLLxQgBACgBgCQAAAAABAAQAAAAABAAQAOAAAOAAQAOAAAPAAQASAAASAAIAOAA");
	this.shape_71.setTransform(155.1,183.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEE3BC").s().p("ADRKiIggAAIgjAAIgmAAIgnAAIgmAAIgmAAIgEAAIAPgKIAYgTIAfgXIAigWIAegSIAhgTIAFgDIAegPIAZgPIAUgKIAbgRQAOgIALgJIAAgFIgBgGQAMgJAOgCIAMgBIBfABQAKAAAQAFIgCAJQABAOgCANQgDARgFAQQgFATgIASIgFAMQgRgIgQALQgPAKgRAIQgpAVgnAaIgMAJQgUAGgFAEIgWAAgAEdHtIgBgHIABAHgAj+KiIgfAAIgcAAIgZAAIgjAAIgOgEIA8jWQAEAGAzAOQAfAIARAkIAAABIAAAAQgPAZgCAPQgCAaAAAaIAAAcIACAhIgNAAgAh/BeIgDgVQgBgNgEgOQgNgugZgnIABgFIAAgBQAFgIAIgKIAFgGIAAgBQAKgLAOgNQANgMAHgKQAEgBABgBIAJgXIAIgPQALgVAMgUQAbgqATgtIABAAIABAUIAAAEIACAYIADAZIAGAlQABAGAFAGIAOgIQgCgqgDgMQgEgSgBgUIAAgXIgBgBIAAgCIAAgGIAGAKIAPAYIAUAcQAIAMAKAJQAGAFAbALIgDAFQgVAngbAjIgNAOIAAAPIAAACIAAAAIAAAAIAAAFIABAcQgRABgGADQgYAKgUAVQgdAdgaAhQgZAggKAlIgCgUgAiZhFIAMACQANACAUANQgUgNgNgCIgMgCIgBAAIAAAAIAAAAIABAAIAAAAgAgGhSQgSAGgQALQAQgLASgGIABgBIAAAAQAKgEAMAAIABAAIAAAAIAHAAIADAAIADACIgDgCIgDAAIgHAAIAAAAIgBAAQgMAAgKAEIAAAAIgBABgAjwjLQgsgZgfgYQglgbgJguQgIgjgGgNQgdgogIgaIAAAAIgUg4IgCgHQgDgJABgKIgFgCIABgDQAIgYAHgYIABgDQAKgmACgoIACgTQAYAoAZASQAYASAbANQAZALAqAHIACgHQgcgegSgoIgIgOIADgDQAjAiAoAfQAjAbAsgDIAdgDIgGgZIADgBQAEABADAEIAGAIQAFAFAGAEQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIADAAIAAgDQACgFAAgGQAAAFAEACIAEACIABABIACAHIAAAAIAFAUIAGAUIABAFIAFAVIAHAgIAFAUIACAPIABACQADARACARIADAVIgHABQgCAGAAAHQAAAMgCAMQgEAjgQAfIAGADIgEAIIgNAVIgLAQIgDAEIgVAdQgFAHgHAFQggAUgcAAQgkAAgbgigAkak9IABALIABACQAQAMAUABIAKAAIgKAAQgUgBgQgMIgBgCIgBgLIABgEIACgCQAEgBAEgFIAEgHIAEgOQACgFABgGQAAgFgCgFQACAFAAAFQgBAGgCAFIgEAOIgEAHQgEAFgEABIgCACIgBAEIAAAAgAlTmSIgPAEIgCABIgGAEIAAAAQAHAPAJABQADABADgCIAHgDQAEgCABgDIABgFIAAgBIAAgJQgEgBgFAAIgDAAgAlvmHIAEgBIABgBIgBABIgEABIgBAAIAAAAIgDgBIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIABAAIADABIAAAAIABAAgAlomPIACAAIAAAAIAAAAIgCAAIgBAAIAAAAQgDAAgCgDQACADADAAIAAAAIABAAgAldmUQgEgBgCgCQACACAEABgAlTmVQgDgBgBgEQABAEADABgAjnnBIABACIABADQAFASANgFIAcgKQAKgCAGgGQABgBADgIIgGAAIgHAAIgIgGIAIAGIgCAAIgEAAIgCAAIgLABIgEgDIgEgEIAEAEIAEADIgDAAIgPADQgJACgIADQgGgDgDgEQADAEAGADIgBAAgAjcnKQADADAEABQgEgBgDgDIgDgCIADACgAgZndIgIggIgHgZIgMgjIgDgIIgBgCIAAgCQACgJAGgGQAFgFAGgDQAFgDAGABQAFAAADAEQAGAHADAIQAFALACANQACAOgBANQgBAOgEANIgHAaIgEARIgBAEIgDAAIgEgPg");
	this.shape_72.setTransform(157.4,191.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#8F6910").ss(1,1,1).p("AAhgUQBGgRArAyAiQAZQgDABAGgGQAFgGAFgFQAagTAjAGQAIACAJACQACABADAA");
	this.shape_73.setTransform(144.5,113.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AiHoWQgVgkAFg4QAEgoABgTQABgHABgDQADgaAGgWQAbg2AngoQAmgoAkgKQAmgKAFAEQAFAFAigGQAhgHAqgBQAqgBAjAYQAkAZAeAhQAcAfAVAlQATAgALAjQAJAeAEAeQACAWgPCYQgCAGgCAGQgLArgGAtQgHAuAGAvQAFAwAMAiQAKAdAKAUQACADABADQAAAAAJAPQgRgJgJgCQgOgEgNgGQgSgHgQgLQgDgCgEgBQgBADAAADQgCAJABAGIAAABQAAABAAABQABAEABADAEIl2QgBgEAAgEIAAgBQgBgEAAgFQgDgegDgeIgBgGQAAgBAAgBQAAgBAAgCQAAgBgBgCQgCgeAAgeQAAAAAAgBQAAgDAAgEQAAgEAAgEQgBgBgCgBQAAgBAAAAQgHgIgFgJQgLgXgOgXQgBgBgBgCQAAACAAABQAAABAAACQAAACAAADQAAADAAACQABAHACAGQABADAAACQAAAAAAAAQgCgBgBgCQAAAAAAAAQgBgBAAgBQgDgDgDgEQgGgHgJgFQgMgIgOgHQgMgGgLgGQghgUgdgZQgjgegWgoQgEgIgDgKQAAgBAAAAQAAAAAAABQgKAmgEAMQgGAUgJATQgKAYgMAWQgQAegYAYQgJAIgJAHQgDACgDACQgCgGgCgHAEemhQAZgngFgsQgEgsgTgFQgSgGACAcQgDgEgEgDQABADAAAEQAAAAAAAAQAFAdADAeQABACAAADQABAKACALQABAMACAMIAAAAQAAACAAABQABAKACALQABAIABAHQAFAvAFAuQAFAnAFAoQADAUAEATQABAHACAGQAAADACADQABADACADAEIl2QABAHAAAHQAAABABABQAAABAAABQAAACAAACQAGAxAGAwQADAZAGAZQAAABABAAIAAAAQAEATAGATQAEALAGAJAD3lCQAGgQAGgRQAAgBAAgBQABgBAAgCQACgHACgHABpiiIAAAAIAAAAQAdgGAcgfQAdgfAUgZQAUgZAHgSQAFgMACgHIACgEQAAAAAAgBADoAnQAAgBAAAAQgBgOgBgQQAAgBAAAAQAKgHAKgJQAAAAAAAAQABAAAAgBIAAAAQABAAAAgBIAAAAQAVgVASgYQAIgJAHgKQACgDACgDIgEgVQgOAAgHgNQAAAAAAgBIAAAAIAAAAQgDgFgDgHQgEgJgEgNQgFgMgFgOQgFgRgFgPQgCgFgCgGQgBgEABhVQAAgHAAgHAFthIIBbAuQATAKAPAJQAWAGArA+QARAZAMAhIhYASAEjh3QATADAFADIAAABQABAAAAABQADABACACAFshEQABgCAAgCAFkhMIAAAAQABABAAAAQACABABACIAEAEQgSBAgBA/QAAAXABAWIAAABQAFA3AKA1QABABAAABQABACACACQgDgBgCgBIAAAAIgBAAQgXgMgUgWQgGgHgHgIQgWgegZg3QgJgVgKgZQgDABgCABIAAAAQACAgABAVQAAARACARQAAANACAMQADAmAGAlQAJBAAPA+IASA9IAAABIACAFAFkhMIAJAEAFIhnQAQANAMAOAI5F7QAEgLADgMQALgxgBg2QAAgRgBgQQgBgHgBgGIApAAQAAAEAAAEQADBSgPA9QgDANgEANIgGA4IAAAAIAAAAQgBAVgCAIIAAAEQgBACAAADAJHDPIg4AAIgfhGIACAsAJIB3IA5BTIgRAFAgzrPQgBAagHAYQgFATgIASQgGANgJAJQgJALgLAHQgDADgFAAQACgDACgCQAHgKAGgKQAGgNAFgPQADgJACgKQAAgCAAgDAhzozQADgDACgDQAOgTAMgUIAAAAQAGgMAGgLQAKgSAIgSQALgYAGgZQAAgBAAAAQAEgMAAgNAhtokQAEgCAEgDQAIAgACAbQABAOAAAVIAAABQAAAIAAAKQAAABAAAAIAAAAQgBAVgBAZQgCArAQAlQAEAJAFAIQAAABABABQAGALAJALQAEAFADAEQAAgBAAgBAhvotQABAFABAEAhzozQADAEABACAiHoWQgCABgCABAiGoXQAAAAABgBQAMgEAMgIAiHoWIABgBQAJgPAKgNAiFoYQALgKALgLAAnm0QgDAGgDAGQgBAAAAABQAAAAAAABQgWArgMADQgMAaAhAIQABAAAAAAQAHACAJABAhim3QgYgugNgxABpiiQgEAPgDAKQgBAFgBAEQgBAGgBADQgBAHAAADQAAAEAAAEQgBAHgBAFQAAABAAABQAAAAAAAAIAAAAQgCAEAAAEQgBADgBADQgBACAAACQgPASgFANQgHAIgHAJIAAAAQgEAGgEAGQgBACgCACQAbARAMApQADAJACALQAHAdAABbQAdh1A9gWQAJgDAWgHQAIgCALgDAgukHQAqAnARAdQATAcAoAEQAOACARgBQABAAABAAABdhlQgKAFgJADQgCADgBADQgEAGgEAHQgCADgCADABBhXQgBACgCACAA5hLQgHAJgHAJQgYAegZAbQgBAAgDACQgEAWgFAXQgBACgBACQAAAAAAAAQgpBNgJB1IArhcIAVhGIAAAAIAAAAIgTAOQABgYAFgVQAAgDABgCAA9gOQANAAARALADzgTQgJABgJACQAAAAgBAAQgBAAgBABQgTAEgTAJQgLADgGAIABdhlQg0gEgLABQgCAAgCAAQgIABgJgBQgEgBgEgBQgJgMgMgKQgFgEgHgFQgDgCgDgBQgIAGgIAGQABgTACgSQAAgCAAgBQAHgwgCgvAhGkoQAFAlAEAmQACAagCAaQAAABAAABQgBAUgFATQgBAFgBAFQAAABAAAAQAHgFAIgGIAAAAIAAAAQgBASABASAhFh1QgEADgDACQgPAKgMAOQgCACgEgTQAHgLAFgMQAIgRAEgUQAFgYABgYQACgpgBg7AAWAqIgOAdIADgBIALgcIATgvAgHBTIABAAIAOgMIgkBSAhHD1IgFAMIgUA6QgEAQAAAPQAAAaANAYIAJARIAcAwQAAAAAAABQAEAIAFAJQADAGAMAWQABAggEAgIgWgDIgegFAgKACIAgAoAgdH3IADAEIAHAQAgTILIAAAAIAAAAIAAAAIADAJIAGAWIADANIAAAAQABAEAAADQAHAlAEAlQABAGABAGQgGgCgEgCQgHgCgHgCQgKgDgJgDQgCgBAAgCQAAgVAEgVQADgPACgPAhOGdIgRCUIAOACIAAAAQgNBIgIA8QjXAlk9CmIAAAAQgDABgDACAAHKUQABAJABAJQAAACABACQABAOABAOQAEAtAAAuIFGg3IABAAIgBAAIAShIQABgYADgeQgIgUgJgUQgBgEgCgEQgSgtgPguQgBgDgBgDIgRg4IgDgFAALNTIgCAAIl1AAIBggoIDqgJIAygBAAKNaIAAAAIAAgBIABgGIgBAHIAAAAQgBAFgBAFQABgIAAgCgAAJNaQAAgBAAAAQABgBAAABAAJNaIqBAtAI5F7IAkAFAHyC4IAECkIABAWIBCAJAFyJ6QgDgHgDgHAIAJkQgUgBgVgDQgcgDgcgTQgJgGgSgPIgSBFIgKAoAGEI1QgHgGgIgHQAIgvAFgrQAQh9gKhmAJSHjQgEATgGAYQgIAhgCAQQgBAQgEAWQgIAAgJAAAIBJkQAEAAADABQAQAAAQAAQgGAlgNAiQgDAIgZA/IgXBgInXAA");
	this.shape_74.setTransform(138.8,171.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AnxHrIABAAIACAEgAHgFTIAAAAIAAAAgAGrAHIABgBIACAGgAHxi9IAAAAIABAAgACBlCIAAAAIAAAAgAByliIAAAAIACAAgADInjIAAgHIADgFIAFAAIgHANg");
	this.shape_75.setTransform(125.1,212.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#76782D").s().p("AkiFEIgOgDIgTgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgVAEgVIAFgeQADgZAAgZIgBgOIAIAPIAAABIADAJIAFAWIAEANIAAAAIABAHQAIAkAFAmIACALIgNgEgABOEhIgRgpIgDgHQgSgtgPguIgDgHIgQg3IgCgFIAAgBIAMgIQAqA0AqAEQgFAsgJAvQBEAnBqgHIACgBQAXgcAXhJIgKArQgIAhgCAQIgFAnIgRAAIgggBIgHAAIgBAAIgpgEQgcgEgcgSQgKgGgSgPIgPgNIAPANIgRBFIgGgOgAlRDsIABgFIAVg7IACAEIABAOQAAAZgDAZgABlDqIAAAAgAEbAwIAGgXIgGAXIhCgJIgBgWIA4AAQAXgTAFhLQABA3gMAvIAIACIAdAAIgHAagADTiRIAAgDIgBgsIAfBGIA4AAIABAMIgBgMIApAAIAAAIIgoAEIg2AGgAgmjMIgKABIgCgiIgDg2IABAAIAFgBIATAtQAYA4AVAeIAMAOIgGAIQgngbgWgmgAkykWIABgFIAJgsIAhAnIgNAeIgRAMIAAAAIAAAAIgTAOQABgYAFgWg");
	this.shape_76.setTransform(167.5,204.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9FA156").s().p("ABkE/QAJguAFgsQgqgFgqg0IgMAIIgSg9QgNg+gKg9QgFgmgEgmIgCgZIAKAAQAWAmAnAbIAGgIQAUAXAYALQgYgLgUgXIgMgPQgXgegXg3IgTguIgGgeIATgSIABAAIABgBIAAAAIAAgBIABAAQATgUASgZIAOgTIAFgGIgFgUQgNAAgHgOIgBgBIAAAAIAGgDQAUADAFAEIAAAAIABABIAFADIAAAGIAGAAQAQANANANIAAAAIABABIADADIAEAEQgSBAgBBBIAAAMIABAhIAAABQAEA3ALA2IABACIACADIgFgCIAFACIgCgDIgBgCQgLg2gEg3IAAgBIgBghIAAgMQABhBAShAIABgEIBaAuIAjATQAVAGArBBQASAYALAhIA5BTIgRAFIgoAAIg4AAIgfhGIBXgSIhXASIABAtIAAACIAhAqIA2gGIAogEQADBPgPA9IgdAAIgIgBQAMgygBg2IgCgfIACAfQgFBKgXAVIg4AAIgFiiIAFCiIABAXIBCAIIAjAFIgFA5IgBgBIAAABIgCAcIgBAEIgBAFIAAACIgBADQgXBJgWAbIgCACIgfABQhWAAg5gigAByDlQAJhNAAhEQAAgrgDgnQADAnAAArQAABEgJBNgABXgOIAAAAIAAAAgAliFKIgNgCIARiUIAbAwIABABIAIARIAPAdIgCgFIgVA8IgBAFgAE6AUIAAAAgAkmi0IABABQgFAWgBAXIAUgNIAAAAIgWBGIgqBZQAJhyAohOgADghegAkajlIAEgEQAagbAYgeIAOgSIAGAAIABABIgEAGIAEgGIAHgNIADgGQAKgCAJgFIgCAMIAAABIAAAAIAAAAIgCAIIgCAHIAAADQgPASgFANIgPARIAAABIgIALIgCAEIgUAxg");
	this.shape_77.setTransform(166.1,194.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E3CFA4").s().p("Aj2JdIgCAAIAAgIIGsghIAAgCQA1hsAUhYIACAAIAGAAIAhABQgHAlgNAhIgbBIIgXBggAkGGbIAMACIACATIABAEIACAbQAEAuAAAtIg0ACgAiQlWQgEgCgCgFIgEgKIgDgPIgCgKIAHgYIAAgBIAAAAQA1gvAVgWQAfghAUgoQANgaALgbIADADIgKAhIAAABIgCAEIgHATQgHARgUAZQgUAagcAfQgcAegeAGQAegGAcgeQAcgfAUgaQAUgZAHgRIAHgTIgCAHIAEABQgBBWABAEIAEALQgOAfgWAbIgSAWIgFAGQgJALgLAIQgRAOgRAAQgMAAgNgHgAhbm6IABAAIgBAAg");
	this.shape_78.setTransform(164.7,196.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FEE3BC").s().p("Ao9M8QE9imDYglQAIg8AMhIIAAAAIAdAEIAVAEIgEAeQgEAVAAAVQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIATAGIAOADIAMAEIgMgCIgeCRIjoAJIhgAoIF1AAIAAAHIqBAtgABHMNgAkuMNIBggoIDogJIAzgCIFHg2IAAAAIAAAAIAShJIAKgnIARhFQASAPAKAGQAcASAcAEIApAEQgVBYg1BsIAAACImuAhIABAIgACTADIgFgTQgNgogagUIACgEIAIgLIAAAAIAPgSQAFgNAPgRIAAgEIACgHIACgHIAAAAIAAgBIAAgBIACgMIABgJIABgKIABgIIADgKIACAKIADAPIADAKQACAFAEACQAfARAcgXQALgJAJgLIAFgGIASgVQAWgcAOgfIALAgIAJAaIAJAWIAFALIAAABIABABQAHANANAAIAFAVIgFAGIgOATQgSAYgVAVIgBAAIAAABIAAAAIgBABIgBAAIgTASIgBAAIACAeIAAABIgTAGIgfAKQg9AUgdB0QAAhagGgdgAEfhWIgBAAIgCAAQgUAFgTAJQgKAEgGAIQAGgIAKgEQATgJAUgFIACAAIABAAIARgEIgRAEgACZhKIgDgBQgOgIgLgBIgBAAIAAAAIgBAAIAAAAIAAAAIABAAIAAAAIABAAQALABAOAIIADABgACLjoIgGgBIACAAIAQABIABAAIAAAAIAMAAIgOABIgLgBgACXjoIgQgBIgCAAQgogEgTgcQgSgdgqgnIABgBIgBgBIgNgQIgIgOIgBgBIgIgRQgRglACgrIACguIAAAAIAAgBIABgTIAAAAIgBgkQgCgbgJgfIAHgFIARgPQAXgXAPgeQAMgXALgXQAJgTAHgUQAEgMAKgnIAAAAQADAKAFAJQAVAnAjAeQAdAaAiAUIAXAMIAaAPQAIAFAGAHIAGAHIABACIABAAIACACIABABIgCgFIgCgNIgBgFIAAgGIAAgCIACAAQAOAWAMAYQAEAJAHAIIABAAIACACIAAAJIAAAHIAAABQAAAeADAeIAAADIAAADIABACIAAAFIAGA9IABAJIAAABIgJAZQgLAagNAaQgUAogeAhQgWAXg1AuIAAAAIgCABIgMAAIAAAAIgBAAgABQmcIACAAIAQACIgQgCIgCAAQgZgGAAgQQAAgGADgHQANgCAWgsIABgBIAAABIgBAAQgWAsgNACQgDAHAAAGQAAAQAZAGgABenuIAGgNIgGANgAAAorIAAABIAAAAIAAAAIACgBIABgDIgDADgAgbpwIABAAIAAAAIAAAAIgBAAQgBAAAFgFIAKgLIACgBIACgCQAQgNAWAAIAAAAIABAAIAMABIADABQAJABAJAEIAAAAIACABIACAAIABAAIAAAAIAAAAIgBAAIgCAAIgCgBIAAAAQgJgEgJgBIgDgBIgMgBIgBAAIAAAAQgWAAgQANIgCACIgCABIgKALQgFAFABAAIAAAAgAEIp7IgBgBIgBgBQgfgmguAAIgBAAIAAAAQgPAAgSAFQASgFAPAAIAAAAIABAAQAuAAAfAmIABABIABABIAAAAgACkjoIAAAAgAFRnoIAAAAIgDgZIgDgUIAAgFIgIg7IAAAAIAFgBQgCgbATAFQASAGAFArQAEAsgZAoIgJABIgBgCg");
	this.shape_79.setTransform(132.7,178.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAEED3").s().p("AAJggQgGAXgDAXIgBALIAAAAQgBAIgGAAQABgiAQgfg");
	this.shape_80.setTransform(124.2,100.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B66616").s().p("AjuGGQAHgLAFgMQAIgSAEgUQAFgXABgYQADgqgCg6IAJARIABABQAHAMAJALIAHAJIgHgJQgJgLgHgMIAKAOIANAPIABACIgBABIAAgBIAAgCIAAACIAAABIAAAOQAAAogFApIgBACIgDAmIAAAAIgPALIAAgBIAAAAIACgKQAFgUABgUIABgBIAAgWQAAgPgBgPIgIhLIAIBLQABAPAAAPIAAAWIgBABQgBAUgFAUIgCAKIAAAAIAAABIgHAEQgPAKgMAOIAAAAQgCAAgEgQgAhgGGIgFABIgQgBIgIgBQgLgMgMgKIgMgJIgHgDIgQAMIADgmIABgCQAFgpAAgoIAAgOQApAnATAcQATAdAoAEIAGABQAMACANgDIACAAIAAAAIgBAAIgBAAIABAAIABAAIgHAZIgCAKIgCAIIgBAKIAAAJQg0gEgKAAgAEAF4QgNgEgNgFQgSgIgRgKIgHgEIgGgGIgDgMIgHgoIgJhPIgLhcIgCgQIgDgVIAKgBQAZgogFgqQgEgsgTgFQgSgFACAbIgGgHIgJAAIAAgIIgCgCIgBgBQgHgHgFgJQgLgYgOgWIgCgDIAAADIAAACIAAAFIAAAGIADANIACAFIgBgBIgDgCIAAAAIgBgCIgGgHQgGgHgIgGIgbgOIgWgNQgggTgdgaQgjgegWgnQgEgJgDgKIAAgBIAAABQgKAmgFANQgHAUgIATQgLAXgMAXQgQAegYAXIgSAPIgGAFIgEgOIgFgDQAOgSAMgUIAAgBIANgXIARgjQALgYAHgaIAAAAIAAAAQADgNAAgNQAAANgDANIAAAAIAAAAQgHAagLAYIgRAjIgNAXIAAABQgMAUgOASIgEAGIgUAdIABgBQAMgFAMgHIAIgFQAIAfACAZIABAkIgGAAQAAALgCAIQgYgtgMgwIAAAAIAAAAQgWgjAFg4IAGg7IABgLQADgZAGgXQAcg1AmgpQAngoAmgKQAlgKAFAFQAFAFAigHQAhgGAogBQAqgCAjAYQAlAZAdAhQAcAgAVAkQATAgALAkQAKAdADAeQACAXgPCVIgEANQgKAqgHAuQgHAtAGAwQAGAvALAiQALAeAKAUIACAFIAJAQQgRgKgJgCgAjjh2QgGALgHAJIgDAFQAEAAADgCQAMgIAIgKIgLgFQAHgNAEgPIAFgSIABgFIAAAAIAAAAIgBAFIgFASQgEAPgHANIAAAAgAi8isQgEATgJASQgGAMgJAKQAJgKAGgMQAJgSAEgTQAHgYABgaQgBAagHAYgACiF3IgGADIAAAAIgFgLIgJgWIgJgbIgLgfIgEgLQgBgEABhWIAAgNIAMghIABgDIAAgCIAGgBIgCgNIgBgJIAAAAIgBgKIgGg8IgBgFIAAgCIAAgDIAAgEQgDgcAAgeIAKAAIAIA4IAAAFIADAVIADAZIAAAAIAAACIADAVIACAQIALBcIAJBPIAHAoIADAMIACAHIADAFQgCAKABAGIAAAAIAAADIADAGIgDAGQgFgEgTgDgACfEjQAEATAHATQADAKAGAJQgGgJgDgKQgHgTgEgTIAAgBIAAAAQgGgZgEgZIgMhiIAAgDIAAgDIAAgCIAAACIAAADIAAADIAMBiQAEAZAGAZIAAAAIAAABgAi3FvIAAAAgAgWFMIAAAAgACTBPIAAAAg");
	this.shape_81.setTransform(151.7,121.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AiHoWQgVgkAFg4QAEgoABgTQABgHABgDQADgaAGgWQAbg2AngoQAmgoAkgKQAmgKAFAEQAFAFAigGQAhgHAqgBQAqgBAjAYQAkAZAeAhQAcAfAVAlQATAgALAjQAJAeAEAeQACAWgPCYQgCAGgCAGQgLArgGAtQgHAuAGAvQAFAwAMAiQAKAdAKAUQACADABADQAAAAAJAPQgRgJgJgCQgOgEgNgGQgSgHgQgLQgDgCgEgBQgBADAAADQgCAJABAGIAAABQAAABAAABQABAEABADAEIl2QgBgEAAgEIAAgBQgBgEAAgFQgDgegDgeIgBgGQAAgBAAgBQAAgBAAgCQAAgBgBgCQgCgeAAgeQAAAAAAgBQAAgDAAgEQAAgEAAgEQgBgBgCgBQAAgBAAAAQgHgIgFgJQgLgXgOgXQgBgBgBgCQAAACAAABQAAABAAACQAAACAAADQAAADAAACQABAHACAGQABADAAACQAAAAAAAAQgCgBgBgCQAAAAAAAAQgBgBAAgBQgDgDgDgEQgGgHgJgFQgMgIgOgHQgMgGgLgGQghgUgdgZQgjgegWgoQgEgIgDgKQAAgBAAAAQAAAAAAABQgKAmgEAMQgGAUgJATQgKAYgMAWQgQAegYAYQgJAIgJAHQgDACgDACQgEADgEACQgBgEgBgFQgBgCgDgEQADgDACgDQAOgTAMgUIAAAAQAGgMAGgLQAKgSAIgSQALgYAGgZQAAgBAAAAQAEgMAAgNAEemhQAZgngFgsQgEgsgTgFQgSgGACAcQgDgEgEgDQABADAAAEQAAAAAAAAQAFAdADAeQABACAAADQABAKACALQABAMACAMIAAAAQAAACAAABQABAKACALQABAIABAHQAFAvAFAuQAFAnAFAoQADAUAEATQABAHACAGQAAADACADQABADACADAEIl2QABAHAAAHQAAABABABQAAABAAABQAAACAAACQAGAxAGAwQADAZAGAZQAAABABAAIAAAAQAEATAGATQAEALAGAJAD3lCQAGgQAGgRQAAgBAAgBQABgBAAgCQACgHACgHABpiiIAAAAIAAAAQAdgGAcgfQAdgfAUgZQAUgZAHgSQAFgMACgHIACgEQAAAAAAgBADoAnQAAgBAAAAQgBgOgBgQQAAgBAAAAQAKgHAKgJQAAAAAAAAQABAAAAgBIAAAAQABAAAAgBIAAAAQAVgVASgYQAIgJAHgKQACgDACgDIgEgVQgOAAgHgNQAAAAAAgBIAAAAIAAAAQgDgFgDgHQgEgJgEgNQgFgMgFgOQgFgRgFgPQgCgFgCgGQgBgEABhVQAAgHAAgHAFthIIBbAuQATAKAPAJQAWAGArA+QARAZAMAhIhYASAEjh3QATADAFADIAAABQABAAAAABQADABACACAFshEQABgCAAgCAFkhMIAAAAQABABAAAAQACABABACIAEAEAFkhMIAJAEAFIhnQAQANAMAOADoAnIAAAAQACgBADgBQAKAZAJAVQAZA3AWAeQAHAIAGAHQAUAWAXAMIABAAIAAAAQACABADABQgCgCgBgCQAAgBgBgBQgKg1gFg3IAAgBQgBgWAAgXQABg/AShAAEkGjIgCgFIAAgBIgSg9QgPg+gJhAQgGglgDgmQgCgMAAgNQgCgRAAgRQgBgVgCggAI5F7QAEgLADgMQALgxgBg2QAAgRgBgQQgBgHgBgGIApAAQAAAEAAAEQADBSgPA9QgDANgEANIgGA4IAAAAIAAAAQgBAVgCAIIAAAEQgBACAAADAJHDPIg4AAIgfhGIACAsAJIB3IA5BTIgRAFAgzrPQgBAagHAYQgFATgIASQgGANgJAJQgJALgLAHQgDADgFAAQACgDACgCQAHgKAGgKQAGgNAFgPQADgJACgKQAAgCAAgDAhpo2QACAHACAGQAIAgACAbQABAOAAAVIAAABQAAAIAAAKQAAABAAAAIAAAAQgBAVgBAZQgCArAQAlQAEAJAFAIQAAABABABQAGALAJALQAEAFADAEQAAgBAAgBAiHoWQgCABgCABAiFoYQgBABAAAAIgBABQANAxAYAuAhzozQgKANgJAPAhvotQgLALgLAKAhtokQgMAIgMAEAAnm0QgDAGgDAGQgBAAAAABQAAAAAAABQgWArgMADQgMAaAhAIQABAAAAAAQAHACAJABABpiiQgEAPgDAKQgBAFgBAEQgBAGgBADQgBAHAAADQAAAEAAAEQgBAHgBAFQAAABAAABQAAAAAAAAIAAAAQgCAEAAAEQgBADgBADQgBACAAACQgPASgFANQgHAIgHAJIAAAAQgEAGgEAGQgBACgCACQAbARAMApQADAJACALQAHAdAABbQAdh1A9gWQAJgDAWgHQAIgCALgDAgukHQAqAnARAdQATAcAoAEQAOACARgBQABAAABAAABdhlQgKAFgJADQgCADgBADQgEAGgEAHQgCADgCADABBhXQgBACgCACAA5hLQgHAJgHAJQgYAegZAbQgBAAgDACQgEAWgFAXQgBACgBACQAAAAAAAAQgpBNgJB1IArhcIAkhSIgOAMIgBAAIAAAAIgTAOQABgYAFgVQAAgDABgCAA9gOQANAAARALADzgTQgJABgJACQAAAAgBAAQgBAAgBABQgTAEgTAJQgLADgGAIABdhlQg0gEgLABQgCAAgCAAQgIABgJgBQgEgBgEgBQgJgMgMgKQgFgEgHgFQgDgCgDgBQgIAGgIAGQABgTACgSQAAgCAAgBQAHgwgCgvAhGkoQAFAlAEAmQACAagCAaQAAABAAABQgBAUgFATQgBAFgBAFQAAABAAAAQAHgFAIgGIAAAAIAAAAQgBASABASAhFh1QgEADgDACQgPAKgMAOQgCACgEgTQAHgLAFgMQAIgRAEgUQAFgYABgYQACgpgBg7AAWAqIgOAdIADgBIALgcIATgvAgHBTIAAAAIgVBGAhOGdIgJgRQgNgYAAgaQAAgPAEgQIAUg6IAFgMAgKACIAgAoAhOGdIAcAwQAAAAAAABQAEAIAFAJQADAGAMAWQABAggEAgIgWgDIgegFAgdH3IADAEIAHAQIAAAAAgTILIAAAAIAAAAIADAJIAGAWIADANIAAAAQABAEAAADQAHAlAEAlQABAGABAGQgGgCgEgCQgHgCgHgCQgKgDgJgDQgCgBAAgCQAAgVAEgVQADgPACgPAhOGdIgRCUIAOACIAAAAQgNBIgIA8QjXAlk9CmIAAAAQgDABgDACAAHKUQABAJABAJQAAACABACQABAOABAOQAEAtAAAuIFGg3IABAAIgBAAIAShIQABgYADgeQgIgUgJgUQgBgEgCgEQgSgtgPguQgBgDgBgDIgRg4IgDgFAALNTIgCAAIl1AAIBggoIDqgJIAygBAAKNaIAAAAIAAgBIABgGIgBAHIAAAAQgBAFgBAFQABgIAAgCgAAJNaQAAgBAAAAQABgBAAABAAJNaIqBAtAI5F7IAkAFAHyC4IAECkIABAWIBCAJAFsJsQADAHADAHIgKAoAIAJkQgUgBgVgDQgcgDgcgTQgJgGgSgPIgSBFAGEI1QgHgGgIgHQAIgvAFgrQAQh9gKhmAJSHjQgEATgGAYQgIAhgCAQQgBAQgEAWQgIAAgJAAQgQAAgQAAQgDgBgEAAAIoJlQgGAlgNAiQgDAIgZA/IgXBgInXAA");
	this.shape_82.setTransform(138.8,171.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9FA156").s().p("ABkE/QAJguAFgsQgqgFgqg0IgMAIIgSg9QgNg+gKg9QgFgmgEgmIgCgZIAKAAQAWAmAnAbIAGgIQAUAXAYALQgYgLgUgXIgMgPQgXgegXg3IgTguIgGgeIATgSIABAAIABgBIAAAAIAAgBIABAAQATgUASgZIAOgTIAFgGIgFgUQgNAAgHgOIgBgBIAAAAIAGgDQAUADAFAEIAAAAIABABIAFADIAAAGIAGAAQAQANANANIAAAAIABABIADADIAEAEQgSBAgBBBIAAAMIABAhIAAABQAEA3ALA2IABACIACADIgFgCIAAAAIAAAAIAAAAIAFACIgCgDIgBgCQgLg2gEg3IAAgBIgBghIAAgMQABhBAShAIABgEIBaAuIAjATQAVAGArBBQASAYALAhIA5BTIgRAFIgoAAIg4AAIgfhGIBXgSIhXASIABAtIAAACIAhAqIA2gGIAogEQADBPgPA9IgdAAIgIgBQAMgygBg2IgCgfIACAfQgFBKgXAVIg4AAIgFiiIAFCiIABAXIBCAIIAjAFIgFA5IgBgBIAAABIgCAcIgBAEIgBAFIAAACIgBADQgXBJgWAbIgCACIgfABQhWAAg5gigAByDlQAJhNAAhEQAAgrgDgnQADAnAAArQAABEgJBNgAliFKIgNgCIARiUIAbAwIABABIAIARIAPAdIgCgFIgVA8IgBAFgAE6AUIAAAAgAkmi0IABABQgFAWgBAXIAUgNIAAAAIgWBGIgqBZQAJhyAohOgADghegAkajlIAEgEQAagbAYgeIAOgSIAGAAIABABIgEAGIAEgGIAHgNIADgGQAKgCAJgFIgCAMIAAABIAAAAIAAAAIgCAIIgCAHIAAADQgPASgFANIgPARIAAABIgIALIgCAEIgUAxg");
	this.shape_83.setTransform(166.1,194.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AiHoWQgVgkAFg4QAEgoABgTQABgHABgDQADgaAGgWQAbg2AngoQAmgoAkgKQAmgKAFAEQAFAFAigGQAhgHAqgBQAqgBAjAYQAkAZAeAhQAcAfAVAlQATAgALAjQAJAeAEAeQACAWgPCYQgCAGgCAGQgLArgGAtQgHAuAGAvQAFAwAMAiQAKAdAKAUQACADABADQAAAAAJAPQgRgJgJgCQgOgEgNgGQgSgHgQgLQgDgCgEgBQgBADAAADQgCAJABAGIAAABQAAABAAABQABAEABADAEIl2QgBgEAAgEIAAgBQgBgEAAgFQgDgegDgeIgBgGQAAgBAAgBQAAgBAAgCQAAgBgBgCQgCgeAAgeQAAAAAAgBQAAgDAAgEQAAgEAAgEQgBgBgCgBQAAgBAAAAQgHgIgFgJQgLgXgOgXQgBgBgBgCQAAACAAABQAAABAAACQAAACAAADQAAADAAACQABAHACAGQABADAAACQAAAAAAAAQgCgBgBgCQAAAAAAAAQgBgBAAgBQgDgDgDgEQgGgHgJgFQgMgIgOgHQgMgGgLgGQghgUgdgZQgjgegWgoQgEgIgDgKQAAgBAAAAQAAAAAAABQgKAmgEAMQgGAUgJATQgKAYgMAWQgQAegYAYQgJAIgJAHQgDACgDACQAIAgACAbQABAOAAAVIAAABQAAAIAAAKQAAABAAAAIAAAAQgBAVgBAZQgCArAQAlQAEAJAFAIQAAABABABQAGALAJALQAEAFADAEQAAgBAAgBAEemhQAZgngFgsQgEgsgTgFQgSgGACAcQgDgEgEgDQABADAAAEQAAAAAAAAQAFAdADAeQABACAAADQABAKACALQABAMACAMIAAAAQAAACAAABQABAKACALQABAIABAHQAFAvAFAuQAFAnAFAoQADAUAEATQABAHACAGQAAADACADQABADACADAEIl2QABAHAAAHQAAABABABQAAABAAABQAAACAAACQAGAxAGAwQADAZAGAZQAAABABAAIAAAAQAEATAGATQAEALAGAJAD3lCQAGgQAGgRQAAgBAAgBQABgBAAgCQACgHACgHADoAnQAAgBAAAAQgBgOgBgQQAAgBAAAAQAKgHAKgJQAAAAAAAAQABAAAAgBIAAAAQABAAAAgBIAAAAQAVgVASgYQAIgJAHgKQACgDACgDIgEgVQgOAAgHgNQAAA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");
	this.shape_84.setTransform(138.8,171.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#76782D").s().p("AkiFEIgOgDIgTgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgVAEgVIAFgeQADgZAAgZIgBgOIAIAPIAAABIADAJIAFAWIAEANIAAAAIABAHQAIAkAFAmIACALIgNgEgABOEhIgRgpIgDgHQgSgtgPguIgDgHIgQg3IgCgFIAAgBIAMgIQAqA0AqAEQgFAsgJAvIAPANIgRBFIgGgOgADqEZIgHAAIgBAAIgpgEQgcgEgcgSQgKgGgSgPIgPgNQBEAnBqgHIACgBQAXgcAXhJIgKArQgIAhgCAQIgFAnIgRAAIgggBgAlRDsIABgFIAVg7IACAEIABAOQAAAZgDAZgABlDqIAAAAgAEbAwIAGgXIgGAXIhCgJIgBgWIA4AAQAXgTAFhLQABA3gMAvIAIACIAdAAIgHAagADTiRIAAgDIgBgsIAfBGIA4AAIABAMIg2AGgAEqhuIAAAAgAEph6IApAAIAAAIIgoAEIgBgMgAgmjMIgKABIgCgiIgDg2IABAAIAFgBIATAtQAYA4AVAeIAMAOIgGAIQgngbgWgmgAkykWIABgFIAJgsIAhAnIgNAeIgRAMIAAAAIAAAAIgTAOQABgYAFgWg");
	this.shape_85.setTransform(167.5,204.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9FA156").s().p("ABkE/QAJguAFgsQgqgFgqg0IgMAIIgSg9QgNg+gKg9QgFgmgEgmIgCgZIAKAAQAWAmAnAbIAGgIQAUAXAYALQgYgLgUgXIgMgPQgXgegXg3IgTguIgGgeIATgSIABAAIABgBIAAAAIAAgBIABAAQATgUASgZIAOgTIAFgGIgFgUQgNAAgHgOIgBgBIAAAAIAGgDQAUADAFAEIAAAAIABABIAFADIAAAGIAGAAQAQANANANIAAAAIABABIADADIAEAEIABgEIBaAuIAjATQAVAGArBBQASAYALAhIhXASIABAtIAAACIAhAqIA2gGIAogEQADBPgPA9IgdAAIgIgBQAMgygBg2IgCgfIACAfQgFBKgXAVIg4AAIgFiiIAFCiIABAXIBCAIIAjAFIgFA5IgBgBIAAABIgCAcIgBAEIgBAFIAAACIgBADQgXBJgWAbIgCACIgfABQhWAAg5gigAByDlQAJhNAAhEQAAgrgDgnQADAnAAArQAABEgJBNgABcgMIgCgDIgBgCQgLg2gEg3IAAgBIgBghIAAgMQABhBAShAQgSBAgBBBIAAAMIABAhIAAABQAEA3ALA2IABACIACADIgFgCIAAAAIAAAAIAAAAIAFACIAAAAgAliFKIgNgCIARiUIAbAwIABABIAIARIAPAdIgCgFIgVA8IgBAFgAkmi0IABABQgFAWgBAXIAUgNIAAAAIgWBGIgqBZQAJhyAohOgABcgMIAAAAgAE3gYIg4AAIgfhGIBXgSIA5BTIgRAFgAkajlIAEgEQAagbAYgeIAOgSIAGAAIABABIgEAGIAEgGIAHgNIADgGQAKgCAJgFIgCAMIAAABIAAAAIAAAAIgCAIIgCAHIAAADQgPASgFANIgPARIAAABIgIALIgCAEIgUAxg");
	this.shape_86.setTransform(166.1,194.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3CFA4").s().p("Aj2JdIgCAAIAAgIIGsghIAAgCQA1hsAUhYIACAAIAGAAIAhABQgHAlgNAhIgbBIIgXBggAkGGbIAMACIACATIABAEIACAbQAEAuAAAtIg0ACgAiQlWQgEgCgCgFIgEgKIgDgPIgCgKIAHgYIAAgBIAAAAQA1gvAVgWQAfghAUgoQANgaALgbIADADIgKAhIAAABIgCAEIgHATQgHARgUAZQgUAagcAfQgcAegeAGQAegGAcgeQAcgfAUgaQAUgZAHgRIAHgTIgCAHIAEABQgBBWABAEIAEALQgOAfgWAbIgSAWIgFAGQgJALgLAIQgRAOgRAAQgMAAgNgHgAhbm6IABAAIgBAAgAgMozIAAAAg");
	this.shape_87.setTransform(164.7,196.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B66616").s().p("AjuGGQAHgLAFgMQAIgSAEgUQAFgXABgYQADgqgCg6IAJARIABABQAHAMAJALIAHAJIgHgJQgJgLgHgMIAKAOIANAPIABACIgBABIAAgBIAAgCIAAACIAAABIAAAOQAAAogFApIgBACIgDAmIAAAAIgPALIAAgBIAAAAIACgKQAFgUABgUIABgBIAAgWQAAgPgBgPIgIhLIAIBLQABAPAAAPIAAAWIgBABQgBAUgFAUIgCAKIAAAAIAAABIgHAEQgPAKgMAOIAAAAQgCAAgEgQgAhgGGIgFABIgQgBIgIgBQgLgMgMgKIgMgJIgHgDIgQAMIADgmIABgCQAFgpAAgoIAAgOQApAnATAcQATAdAoAEIAGABQAMACANgDIACAAIAAAAIgBAAIgBAAIABAAIABAAIgHAZIgCAKIgCAIIgBAKIAAAJQg0gEgKAAgAEAF4QgNgEgNgFQgSgIgRgKIgHgEIgGgGIgDgMIgHgoIgJhPIgLhcIgCgQIgDgVIAKgBQAZgogFgqQgEgsgTgFQgSgFACAbIgGgHIgJAAIAAgIIgCgCIgBgBQgHgHgFgJQgLgYgOgWIgCgDIAAADIAAACIAAAFIAAAGIADANIACAFIgBgBIgDgCIAAAAIgBgCIgGgHQgGgHgIgGIgbgOIgWgNQgggTgdgaQgjgegWgnQgEgJgDgKIAAgBIAAABQgKAmgFANQgHAUgIATQgLAXgMAXQgQAegYAXIgSAPIgGAFQAIAfACAZIABAkIgGAAQAAALgCAIQgYgtgMgwIAAAAIAAAAQgWgjAFg4IAGg7IABgLQADgZAGgXQAcg1AmgpQAngoAmgKQAlgKAFAFQAFAFAigHQAhgGAogBQAqgCAjAYQAlAZAdAhQAcAgAVAkQATAgALAkQAKAdADAeQACAXgPCVIgEANQgKAqgHAuQgHAtAGAwQAGAvALAiQALAeAKAUIACAFIAJAQQgRgKgJgCgAkHgmIABgBQAMgFAMgHIAIgFIgEgOIgFgDQAOgSAMgUIAAgBIANgXIARgjQALgYAHgaIAAAAIAAAAQADgNAAgNQAAANgDANIAAAAIAAAAQgHAagLAYIgRAjIgNAXIAAABQgMAUgOASIgEAGIgUAdIAAAAgAjjh2QgGALgHAJIgDAFQAEAAADgCQAMgIAIgKIgLgFQAHgNAEgPIAFgSIABgFIAAAAIAAAAIgBAFIgFASQgEAPgHANIAAAAgAi8isQgEATgJASQgGAMgJAKQAJgKAGgMQAJgSAEgTQAHgYABgaQgBAagHAYgACiF3IgGADIAAAAIgFgLIgJgWIgJgbIgLgfIgEgLQgBgEABhWIAAgNIAMghIABgDIAAgCIAGgBIgCgNIgBgJIAAAAIgBgKIgGg8IgBgFIAAgCIAAgDIAAgEQgDgcAAgeIAKAAIAIA4IAAAFIADAVIADAZIAAAAIAAACIADAVIACAQIALBcIAJBPIAHAoIADAMIACAHIADAFQgCAKABAGIAAAAIAAADIADAGIgDAGQgFgEgTgDgACfEjQAEATAHATQADAKAGAJQgGgJgDgKQgHgTgEgTIAAgBIAAAAQgGgZgEgZIgMhiIAAgDIAAgDIAAgCIAAACIAAADIAAADIAMBiQAEAZAGAZIAAAAIAAABgAgWFMIAAAAgAiuDoIAAAAgACTBPIAAAAg");
	this.shape_88.setTransform(151.7,121.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},2).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},2).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_63},{t:this.shape_61},{t:this.shape_60},{t:this.shape_56},{t:this.shape_67},{t:this.shape_58},{t:this.shape_57},{t:this.shape_66},{t:this.shape_65},{t:this.shape_53}]},7).to({state:[{t:this.shape_69},{t:this.shape_62},{t:this.shape_72},{t:this.shape_61},{t:this.shape_60},{t:this.shape_56},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_71},{t:this.shape_70},{t:this.shape_53}]},7).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_34},{t:this.shape_75},{t:this.shape_28},{t:this.shape_74},{t:this.shape_73}]},27).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_83},{t:this.shape_76},{t:this.shape_75},{t:this.shape_34},{t:this.shape_28},{t:this.shape_82},{t:this.shape_73}]},30).to({state:[{t:this.shape_88},{t:this.shape_80},{t:this.shape_79},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_75},{t:this.shape_34},{t:this.shape_28},{t:this.shape_84},{t:this.shape_73}]},41).to({state:[{t:this.shape_88},{t:this.shape_80},{t:this.shape_79},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_75},{t:this.shape_34},{t:this.shape_28},{t:this.shape_84},{t:this.shape_73}]},1).wait(66));

	// chair
	this.instance_3 = new lib.gchair("synched",0);
	this.instance_3.setTransform(148,306.4,1,1,0,0,0,73.4,110.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(183));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,80.8,244.9,340.2);


// stage content:
(lib.Dedication_Canvas = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mcjanesounddedication();
	this.instance.setTransform(121.5,430.9,1,1,0,0,0,121.5,250.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(124.5,561.3,243.9,339.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;