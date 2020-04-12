import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Data } from '../film-data.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
  @Input() data: Data[];

  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    if (!this.data) { return; }
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();

    const element = this.barChart.nativeElement;
    const data = this.data;

    const svg1 = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight + 200);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom - 100;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.film));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.characters)]);

    const g = svg1.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x))
      .selectAll(".tick text")
      .call(this.wrap, x.bandwidth());

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, '%'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.film))
      .attr('y', d => y(d.characters))
      .attr('width', x.bandwidth())
      .attr('height', d => contentHeight - y(d.characters));

  }

  onResize() {
    this.createChart();
  }
  wrap(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }
}
