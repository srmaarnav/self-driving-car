class MiniMap{
    constructor(canvas, graph, size) {
        this.canvas = canvas;
        this.graph = graph;
        this.size = size;

        canvas.width = size;
        canvas.height = size;

        this.ctx = canvas.getContext("2d");
    }

    update(viewPoint){
        this.ctx.clearRect(0, 0, this.size, this.size);

        const scalar = 0.05;
        const scaledViewPoint = scale(viewPoint, -scalar);
        this.ctx.save();
        this.ctx.translate(
            scaledViewPoint.x + this.size / 2, 
            scaledViewPoint.y + this.size / 2
        );
        this.ctx.scale(scalar, scalar);
        for(const seg of this.graph.segments){
            seg.draw(this.ctx, {width : 3 / scalar, color: "white"});
        }
        this.ctx.restore();
        new Point(this.size / 2, this.size / 2).draw(this.ctx, {color: "blue", outline: true});
    }
}