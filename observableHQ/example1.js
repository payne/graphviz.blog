viewof editor = {
  const retVal = html`<div>`;
  const dotText = `digraph G {
  graph [fontname=Verdana,fontsize=10.0];
  node [shape=rect,fontname=Verdana,fontsize=10.0];
  edge [fontname=Verdana,fontsize=10.0];

  subgraph cluster_0 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=navy,fillcolor=pink];
    label = "process #1";
    a0;
    a1; 
    a2;
    a3;
	}

  subgraph cluster_1 {
    node [style=filled];
    label = "process #2";
    color=blue
    b0;
    b1;
    b2;
    b3;
	}

  a0 -> a1 -> a2 -> a3;
  b0 -> b1 -> b2 -> b3;

  start -> a0
  start -> b0
  a1 -> b3 [label="Hello and Welcome!"];
  b2 -> a3;
  a3 -> a0;
  a3 -> end;
  b3 -> end;

  start [shape=Mdiamond];
  end [shape=Msquare];
}`;
  
  retVal.value = new hpccCodemirror.DOTEditor()
        	.target(retVal)
          .text(dotText)
      		.resize({width, height:480})
  ;
 
  retVal.value.lazyRender();
  
  return retVal;
}
