import Type from './Type';

function Formula(eqType) {
  switch (eqType) {
    case Type.LINEAR:
      this.constraints = {
        plain: 'a!=0',
        tex: '\\(a \\ne 0\\)'
      };
      this.equation = {
        plain: 'a*x+b=0',
        tex: '\\(ax + b = 0\\)'
      };
      this.root = {
        plain: '-b/a',
        tex: '$$x = -{b \\over a}$$'
      };
      break;
    case Type.QUATRATIC:
      this.constraints = {
        plain: 'a!=0,b^2-4*a*c>=0',
        tex: '\\(a \\ne 0, \\Delta = b^2 - 4ac \\ge 0\\)'
      };
      this.equation = {
        plain: 'a*x^2+b*x+c=0',
        tex: '\\(ax^2 + bx + c = 0\\)'
      };
      this.root = {
        plain: '(-b+sqrt(b^2-4*a*c))/(2a),(-b-sqrt(b^2-4*a*c))/(2a)',
        tex: '$$x = {-b \\pm \\sqrt{b^2 - 4ac} \\over 2a}$$'
      };
      break;
    case Type.CUBIC:
      this.constraints = {
        plain: 'a!=0,((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a))^2+(c/(3*a)-b^2/(9*a^2))^3<=0',
        tex: '$$a \\ne 0, \\\\ A = {bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a}, B = {c \\over 3a} - {b^2 \\over 9a^2}, \\\\ \\Delta = A^2 + B^3 = \\left( {bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} \\right)^2 + \\left( {c \\over 3a} - {b^2 \\over 9a^2} \\right)^3 \\le 0$$'
      };
      this.equation = {
        plain: 'a*x^3+b*x^2+c*x+d=0',
        tex: '\\(ax^3 + bx^2 + cx + d = 0\\)'
      };
      this.root = {
        plain: '-b/(3*a)+cbrt((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a)+sqrt(((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a))^2+(c/(3*a)-b^2/(9*a^2))^3))+cbrt((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a)-sqrt(((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a))^2+(c/(3*a)-b^2/(9*a^2))^3)),-b/(3*a)+(-1+sqrt(3)*i)/2*cbrt((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a)+sqrt(((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a))^2+(c/(3*a)-b^2/(9*a^2))^3))+(-1-sqrt(3)*i)/2*cbrt((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a)-sqrt(((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a))^2+(c/(3*a)-b^2/(9*a^2))^3)),-b/(3*a)+(-1-sqrt(3)*i)/2*cbrt((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a)+sqrt(((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a))^2+(c/(3*a)-b^2/(9*a^2))^3))+(-1+sqrt(3)*i)/2*cbrt((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a)-sqrt(((b*c)/(6*a^2)-b^3/(27*a^3)-d/(2*a))^2+(c/(3*a)-b^2/(9*a^2))^3))',
        tex: '$$x_{1} = {-b \\over 3a} + \\sqrt[3]{A + \\sqrt{\\Delta}} + \\sqrt[3]{A - \\sqrt{\\Delta}} = {-b \\over 3a} + \\sqrt[3]{{bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} + \\sqrt{\\left( {bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} \\right)^2 + \\left( {c \\over 3a} - {b^2 \\over 9a^2} \\right)^3}} + \\sqrt[3]{{bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} - \\sqrt{\\left( {bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} \\right)^2 + \\left( {c \\over 3a} - {b^2 \\over 9a^2} \\right)^3}} \\\\ x_{2,3} = {-b \\over 3a} + {{-1 \\pm \\sqrt{3}i} \\over 2} \\sqrt[3]{A + \\sqrt{\\Delta}} + {{-1 \\mp \\sqrt{3}i} \\over 2} \\sqrt[3]{A - \\sqrt{\\Delta}} = {-b \\over 3a} + {{-1 \\pm \\sqrt{3}i} \\over 2} \\sqrt[3]{{bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} + \\sqrt{\\left( {bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} \\right)^2 + \\left( {c \\over 3a} - {b^2 \\over 9a^2} \\right)^3}} + {{-1 \\mp \\sqrt{3}i} \\over 2} \\sqrt[3]{{bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} - \\sqrt{\\left( {bc \\over 6a^2} - {b^3 \\over 27a^3} - {d \\over 2a} \\right)^2 + \\left( {c \\over 3a} - {b^2 \\over 9a^2} \\right)^3}}$$'
      };
      break;
    case Type.QUARTIC:
      this.constraints = {
        plain: 'a!=0,256*a^3*e^3-192*a^2*b*d*e^2-128*a^2*c^2*e^2+144*a^2*c*d^2*e-27*a^2*d^4+144*a*b^2*c*e^2-6*a*b^2*d^2*e-80*a*b*c^2*d*e+18*a*b*c*d^3+16*a*c^4*e-4*a*c^3*d^2-27*b^4*e^2+18*b^3*c*d*e-4*b^3*d^3-4*b^2*c^3*e+b^2*c^2*d^2',
        tex: '$$a \\ne 0, \\\\ \\Delta = 256a^3e^3-192a^2bde^2-128a^2c^2e^2+144a^2cd^2e-27a^2d^4+144ab^2ce^2-6ab^2d^2e-80abc^2de+18abcd^3+16ac^4e-4ac^3d^2-27b^4e^2+18b^3cde-4b^3d^3-4b^2c^3e+b^2c^2d^2$$'
      };
      this.equation = {
        plain: 'a*x^4+b*x^3+c*x^2+d*x+e=0',
        tex: '\\(ax^4 + bx^3 + cx^2 + dx + e = 0\\)'
      };
      this.root = {
        plain: '-b/(4*a)+1/2*sqrt((b/(2*a))^2-2*c/(3*a)+cbrt(2)*(c^2-3*b*d+12*a*e)/(3*a*cbrt(2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e+sqrt((2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e)^2-4*(c^2-3*b*d+12*a*e)^3)))+cbrt(2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e+sqrt((2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e)^2-4*(c^2-3*b*d+12*a*e)^3)))/(3*cbrt(2)*a))-1/2*sqrt(b^2/(2*a^2)-4*c/(3*a)-cbrt(2)*(c^2-3*b*d+12*a*e)/(3*a*cbrt(2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e+sqrt((2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e)^2-4*(c^2-3*b*d+12*a*e)^3)))-cbrt(2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e+sqrt((2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e)^2-4*(c^2-3*b*d+12*a*e)^3)))/(3*cbrt(2)*a)-(b^3-4*a*b*c+8*a^2*d)/(4*a^3*sqrt((b/(2*a))^2-2*c/(3*a)+cbrt(2)*(c^2-3*b*d+12*a*e)/(3*a*cbrt(2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e+sqrt((2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e)^2-4*(c^2-3*b*d+12*a*e)^3)))+cbrt(2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e+sqrt((2*c^3-9*b*c*d+27*a*d^2+27*b^2*e-72*a*c*e)^2-4*(c^2-3*b*d+12*a*e)^3)))/(3*cbrt(2)*a))))',
        tex: '$$x_{1} = -{b \\over 4a} + {1 \\over 2} \\sqrt{({b \\over 2a})^2 - {2c \\over 3a} + {{\\sqrt[3]{2}(c^2 - 3bd + 12ae)} \\over {3a \\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}}} + {{\\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}} \\over {3 \\sqrt[3]{2} a}}} - {1 \\over 2} \\sqrt{{b^2 \\over 2a^2} - {4c \\over 3a} - {{\\sqrt[3]{2}(c^2 - 3bd + 12ae)} \\over {3a \\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}}} - {{\\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}} \\over {3 \\sqrt[3]{2} a}} - {{b^3 - 4abc + 8a^2d} \\over {4a^3 \\sqrt{({b \\over 2a})^2 - {2c \\over 3a} + {{\\sqrt[3]{2}(c^2 - 3bd + 12ae)} \\over {3a \\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}}} + {{\\sqrt[3]{2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace + \\sqrt{(2c^3 - 9bcd + 27ad^2 + 27b^2e - 72ace)^2 - 4(c^2 - 3bd + 12ae)^3}}} \\over {3 \\sqrt[3]{2} a}}}}}}$$'
      };
      break;
    case Type.LINEAR_SET:
      this.constraints = {
        plain: '',
        tex: ''
      };
      this.equation = {
        plain: '',
        tex: ''
      };
      this.root = {
        plain: '',
        tex: ''
      };
      break;
    case Type.IDENTITY:
    case Type.UNKNOWN:
    default:
      this.constraints = { plain: '', tex: '' };
      this.equation = { plain: '', tex: '' };
      this.root = { plain: '', tex: '' };
      break;
  }
}

export default Formula;