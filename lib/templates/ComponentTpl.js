/**
 * ComponentTpl
 */
class ComponentTpl {
  /**
   *
   * @param name - the component name
   */
  constructor(name, { postfix, classExtension }) {
    this.type = 'component';
    this.isDir = true;
    this.name = name;
    this.postfix = postfix;
    this.classExtension = classExtension;
  }
}

export default ComponentTpl;
