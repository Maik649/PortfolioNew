import { ImageComponent } from "./image.component";

export function Link(href: string, className?: string, target?:string, func?: () => void, text?: string, ImagePath?: string) {
  return `<a href="${href}"  ${className ? ` class="${className}"` : ''}  ${target ? `target="${target}"`: ''} ${func ? ` onclick="${func}"` : ''} >${text} ${ImagePath ? ImageComponent('', `${ImagePath}`, `${text}`): '' }</a>`;
}