import Konva from 'konva';

export function terminatorSymbol(baseSize: number, vspace: number) {
   return new Konva.Rect({
      x: baseSize * 0.4,
      y: vspace,
      width: baseSize * 0.2,
      height: baseSize * 0.1,
      fill: '#3f4254',
      cornerRadius: 20,
      opacity: 1
   });
}

export function taskSymbol(baseSize: number, vspace: number) {
   return new Konva.Rect({
      x: baseSize * 0.25,
      y: vspace,
      width: baseSize * 0.5,
      height: baseSize * 0.15,
      fill: '#00ff95',
      opacity: 1
   });
}

export function decisionSymbol(baseSize: number, vspace: number) {
   return new Konva.Line({
      points: [
         baseSize * 0.5,  vspace, 
         baseSize * 0.65, vspace + baseSize * 0.15,
         baseSize * 0.5,  vspace + baseSize * 0.3,
         baseSize * 0.35, vspace + baseSize * 0.15,
      ],
      fill: '#f1c232',
      closed: true,
   });
}

export function dataSymbol(baseSize: number, vspace: number) {
   return new Konva.Line({
      points: [
         baseSize * 0.3,  vspace, 
         baseSize * 0.75, vspace, 
         baseSize * 0.7,  vspace + baseSize * 0.15,
         baseSize * 0.25, vspace + baseSize * 0.15
      ],
      fill: '#00D2FF',
      closed: true,
   });
}

export function arrowSymbol(baseSize: number, vspace: number) {
   return new Konva.Arrow({
      x: baseSize * 0.5,
      y: vspace,
      points: [0, 0, baseSize * 0.4, 0, baseSize * 0.4, 50],
      pointerLength: 10,
      pointerWidth: 10,
      fill: '#3f4254',
      stroke: '#3f4254',
      strokeWidth: 2,
    });
}