// Using MirageJS API endpoints instead of Firebase

export async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getVan(id) {
    const res = await fetch(`/api/vans/${id}`)
    if (!res.ok) {
        throw {
            message: `Failed to fetch van with id ${id}`,
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans() {
    const res = await fetch("/api/host/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch host vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVan(id) {
    const res = await fetch(`/api/host/vans/${id}`)
    if (!res.ok) {
        throw {
            message: `Failed to fetch host van with id ${id}`,
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

