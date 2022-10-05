/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const domainMap = new Map()
  cpdomains.forEach(domains => {
    const [count, fullDomain] = domains.split(' ')
    const numCount = Number(count)
    domainMap.set(fullDomain, (domainMap.get(fullDomain) || 0) + numCount)
    const domainsArr = domains.split('.')
    domainsArr.reduceRight((prev, cur) => {
      domainMap.set(prev, (domainMap.get(prev) || 0) + numCount)
      return `${cur}.${prev}`
    })
  })
  return [...domainMap.keys()].map((domain) => {
    return `${domainMap.get(domain)} ${domain}`
  })
};