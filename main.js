const endpoints = {

  assetDelivery: id => `https://assetdelivery.roblox.com/v1/asset/?id=${id}`, 
  publish: (title, description, groupId) =>
      'https://www.roblox.com/ide/publish/uploadnewanimation' +
      '?assetTypeName=Animation' +
      *&name=${encodeURIComponent(title)}` +
      `&description=${encodeURIComponent(description)}`
      '&AllID=1' +
      '&ispublic-False' +
      '&allowComments-True' +
      '&isGamesAsset=False' +
      (groupId != null ? `&groupId=${groupId}` : '')

};
