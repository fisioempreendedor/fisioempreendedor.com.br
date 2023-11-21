
const generateBreadcrumb = (value: string, item: { name: string; url: string;}) => {
  const links = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: value.charAt(0).toUpperCase() + value.slice(1),
      url: `/${value.toLowerCase()}`
    },
    {
      name: item.name,
      url: item.url
    }
  ]
  return links;
}

export default generateBreadcrumb