/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
  this.timeToLive = timeToLive
  this.tokenMap = new Map()
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.tokenMap.set(tokenId, {
    token: Date.now(),
    expireTime: currentTime + this.timeToLive
  })
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  const tokenInfo = this.tokenMap.get(tokenId)
  if (!tokenInfo || tokenInfo.expireTime <= currentTime) {
    return
  }
  tokenInfo.expireTime = currentTime + this.timeToLive
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  for (const [tokenId, tokenInfo] of this.tokenMap.entries()) {
    if (tokenInfo.expireTime <= currentTime) {
      this.tokenMap.delete(tokenId)
    }
  }
  return this.tokenMap.size
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */