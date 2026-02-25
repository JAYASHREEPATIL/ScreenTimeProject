//
//  ApprovalService.swift
//  ScreenTimeApp
//
//  Created by Jayashree Patil on 25/02/26.
//

import Foundation

class ApprovalService {
  
  func getApprovalStatus(completion: @escaping (Result<Bool, Error>)-> Void){
    
    guard let url = URL(string: "http://127.0.0.1:3000/approval") else {
      return
    }
    
    let task = URLSession.shared.dataTask(with: url) { data, response, error in
      
      if let error = error {
        completion(.failure(error))
        return
      }
      
      guard let data = data else {
        return
      }
      
      do{
        let decoded = try JSONDecoder().decode(ApprovalResponse.self, from: data)
        completion(.success(decoded.approved))
      }catch{
        completion(.failure(error))
      }
    }
    task.resume()
  }
}
