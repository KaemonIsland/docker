# Important K8s takeaways

- Kubernetes is a system to deploy containerized apps.
- Nodes are individual machines (or vm's) that run containers.
- Masters are machines (or vm's) with a set of programs to manage nodes.
- Kubernetes didn't build our images - it got them from somewhere else (docker registry)
- Kubernetes (the master) decided where to run each container - each node can run a dissimilar set of containers.
- To deploy something, we update the desired state of the master with a config file. (IMPORTANT)
- The master works constantly to meet your specified state.(IMPORTANT)

## Imperative Deployments

Do exactly these steps to arrive at this container setup.

## Declarative Deployments

Our container setup should look like this, make it happen.

## Pods vs Deployment

- Pods
  - Runs a single set of containers
  - Good fro one-off dev purposes
  - Rarely used directly in production
- Deployment
  - Runs a set of identical pods (one or more)
  - Monitors the state of each pod, updating as necessary
  - Good for dev
  - Good for production

## Kubectl Cheatsheet

Apply configuration files.

`kubectl apply -f <path-to-configs>`

Get pods status.

`kubectl get pods`

Get services status.

`kubectl get services`

Access multi-client container.

1. Get IP address from Minikube

`minikube ip`

Remove existing pod

`kubectl delete -f <path-to-config>`

Forcibly update a pod image using imperative commands.

`kubectl set image <object_type>/<object_name> <container_name>=<new_image>
