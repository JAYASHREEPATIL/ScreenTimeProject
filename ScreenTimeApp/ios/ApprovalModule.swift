import Foundation
import React

@objc(ApprovalModule)
class ApprovalModule: NSObject {

  @objc
  func getApprovalStatus(
    _ resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {

    let service = ApprovalService()

    service.getApprovalStatus { result in
      DispatchQueue.main.async {
        switch result {
        case .success(let approved):
          resolve(["approved": approved])
        case .failure(let error):
          reject("ERROR", error.localizedDescription, error)
        }
      }
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
